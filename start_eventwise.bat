@echo off
echo Starting Eventwise Environment...

:: Step 1: Apply Kubernetes Manifests
echo Applying Kubernetes YAML files...
kubectl apply -f k8s\

:: Step 2: Pull Latest Docker Images
echo Pulling latest Docker images from Docker Hub...
docker pull neelrami/user-service
docker pull neelrami/order-service

:: Step 3: Restart Deployments
echo Restarting Kubernetes deployments...
kubectl rollout restart deployment user-deployment
kubectl rollout restart deployment order-deployment

:: Step 4: Port-Forward Grafana (Runs in new window)
start cmd /k "kubectl port-forward svc/monitoring-grafana 3000:80"

:: Step 5: Port-Forward User Service
start cmd /k "kubectl port-forward svc/user-service 3001:3001"

:: Step 6: Port-Forward Order Service
start cmd /k "kubectl port-forward svc/order-service 3002:3002"

echo All services started. Access Grafana at http://localhost:3000
pause
