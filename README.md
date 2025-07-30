# Eventwise Microservices Project

Eventwise is a microservices-based application built using Node.js/Express. It demonstrates a modular, scalable architecture with Docker containerization, Kubernetes orchestration, CI/CD automation, and monitoring using Prometheus and Grafana.

---

## 📆 Microservices Overview

| Service       | Port | Responsibilities                                 |
| ------------- | ---- | ------------------------------------------------ |
| User Service  | 3001 | User registration, profile management, retrieval |
| Order Service | 3002 | Order creation, listing, and user-service calls  |

---

## 🛠️ Technologies Used

* **Backend**: Node.js, Express
* **Containerization**: Docker, Docker Compose
* **Orchestration**: Kubernetes (Docker Desktop)
* **Monitoring**: Prometheus, Grafana
* **CI/CD**: GitHub Actions
* **Testing**: Jest, Supertest

---

## 🚀 Local Setup & Usage

### 1. Clone Repo

```bash
git clone https://github.com/neelrami13/eventwise.git
cd eventwise
```

### 2. Run with Docker Compose

```bash
docker-compose up --build
```

* User Service: [http://localhost:3001/users](http://localhost:3001/users)
* Order Service: [http://localhost:3002/orders](http://localhost:3002/orders)

---

## ⚙️ Kubernetes Deployment

### 1. Apply Resources

```bash
kubectl apply -f k8s/
```

### 2. Expose Services (NodePort)

* User Service: `localhost:30001`
* Order Service: `localhost:31856`

### 3. Monitor Resources

```bash
kubectl get pods
kubectl get hpa
kubectl top pods
```

---

## 📊 Monitoring & Autoscaling

* Access Grafana: `http://localhost:3000` (login: admin / prom-operator)
* Metrics: CPU, memory via Prometheus
* HPA: Scales `user-service` pods from 1 to 4 based on CPU

---

## 🧪 Testing

Run locally:

```bash
cd user-service
npm test

cd ../order-service
npm test
```

CI/CD pipeline runs tests on every push using GitHub Actions.

---

## 🔄 CI/CD Pipeline

GitHub Actions automatically:

* Builds and pushes Docker images to Docker Hub
* Runs unit tests for each service
* (Optional) Pull latest images locally and restart deployments:

  ```bash
  docker pull neelrami/user-service
  kubectl rollout restart deployment user-deployment
  ```

---

## 📌 Authors

* Neel Bamania
* Dikshit Aryal
* Nirmal Dhaduk
* Neel Rami

---

## 📜 License

MIT License. For educational use.
