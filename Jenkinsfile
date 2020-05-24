pipeline {
  environment {
    registry = "${env.dockerUsername}/"
  }
  
agent{
    kubernetes {
      label 'docker-agent'
      defaultContainer 'jnlp'
      yamlFile './docker-agent/agent.yaml'
      
    }
  }
  


  stages {
   
// Stage 1: Checkout Code from Git
    stage('Application Code Checkout from Git') {
      steps{
        checkout scm
    }}
    

// Stage 5: Build Docker Image    
    stage('Build Docker Image') {
      when { anyOf { branch 'kubernetes-next'} }
      steps{
        container('docker') {
          script {
             docker.build registry + "${env.commsworthImageName}:${env.BUILD_NUMBER} -f ./Dockerfile "
             docker.build registry + "${env.commsworthImageName}:latest -f ./Dockerfile "
            
        }}}
    }


//Stage 6: Push the Image to a Docker Registry
        stage('Deploy Image') {
          when { anyOf { branch 'kubernetes-next'} }
        steps{
        container('docker'){
            script {
              
                sh("echo ${env.dockerPassword} | docker login -u ${env.dockerUsername} --password-stdin")
                sh("docker push ${env.dockerUsername}/${env.commsworthImageName}:latest")
                
                sh("docker push ${env.dockerUsername}/${env.commsworthImageName}:${env.BUILD_NUMBER}")
          
        }
            }
        }
        }


     

        stage('Deploy Application on K8s') {
         when { anyOf { branch 'kubernetes-next'} }
        steps{
          container('docker') {

            script {
                sh("curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash")
                sh("az login --service-principal -u ${env.appId} --password ${env.password} --tenant ${env.tenant}")
                sh("az aks get-credentials --resource-group ${env.resourceGroup} --name ${env.clusterName}")
                sh("curl -LO https://storage.googleapis.com/kubernetes-release/release/\$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl")
                sh("chmod +x ./kubectl")
                sh("sudo mv ./kubectl /usr/local/bin/kubectl")
                sh("kubectl apply -f k8s")
                sh("kubectl set image deployments/commsworth-deployment  commsworth=${env.dockerUsername}/${commsworthImageName}:${env.BUILD_NUMBER}")
                
            }}
        }
        }





  }
}