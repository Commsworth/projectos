
# Frontend Build
docker build -t commsworthdevops/commsworth:latest -t commsworthdevops/commsworth:$SHA -f  ./Dockerfile .

# Frontend Push To Dockerhub
docker push commsworthdevops/commsworth:latest
docker push commsworthdevops/commsworth:$SHA



# Apply kubernetes configuration
kubectl apply -f  k8s
kubectl set image deployments/projectos-deployment commsworth=commsworthdevops/commsworth:$SHA


