#!/bin/bash
set -e

# Deployment script for myaiskills-website
# Usage: ./deploy.sh [image-tag]

IMAGE_TAG=${1:-latest}
ECR_URI="197128983777.dkr.ecr.af-south-1.amazonaws.com/vukufunde/myaiskills-website"
CONTAINER_NAME="myaiskills-web"
COMPOSE_FILE="docker-compose.prod.yml"

echo "🚀 Starting deployment for myaiskills-website:${IMAGE_TAG}"

# Authenticate with ECR
echo "🔐 Authenticating with AWS ECR..."
aws ecr get-login-password --region af-south-1 | docker login --username AWS --password-stdin 197128983777.dkr.ecr.af-south-1.amazonaws.com

# Pull the latest image
echo "📦 Pulling image from ECR..."
docker pull ${ECR_URI}:${IMAGE_TAG}

# Export environment variables for docker-compose
export ECR_URI
export IMAGE_TAG

# Stop and remove existing container
echo "🛑 Stopping existing container..."
docker-compose -f ${COMPOSE_FILE} down || true

# Start new container
echo "▶️  Starting new container..."
docker-compose -f ${COMPOSE_FILE} up -d

# Wait for health check
echo "🏥 Waiting for container to be healthy..."
sleep 10

# Check container status
if docker ps | grep -q ${CONTAINER_NAME}; then
    echo "✅ Deployment successful!"
    echo "📊 Container status:"
    docker ps | grep ${CONTAINER_NAME}

    # Test the endpoint
    echo "🧪 Testing endpoint..."
    curl -f http://localhost:3751 > /dev/null 2>&1 && echo "✅ Application is responding" || echo "⚠️  Warning: Application not responding yet"
else
    echo "❌ Deployment failed!"
    echo "📋 Container logs:"
    docker-compose -f ${COMPOSE_FILE} logs --tail=50
    exit 1
fi

# Clean up old images
echo "🧹 Cleaning up old images..."
docker image prune -f

echo "🎉 Deployment complete!"
