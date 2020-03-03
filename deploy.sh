
# Frontend Build
docker build -t commsworthdevops/projectos:latest -t commsworthdevops/projectos:$SHA -f  ./Dockerfile .

# Frontend Push To Dockerhub
docker push commsworthdevops/projectos:latest
docker push commsworthdevops/projectos:$SHA



# Apply kubernetes configuration
kubectl apply -f  k8s
kubectl set image deployments/projectos-deployment client=commsworthdevops/projectos:$SHA


