# Deployment Guide - myaiskills.co.za

## Overview
This document provides instructions for deploying the myaiskills.co.za website to production.

## Infrastructure Details
- **Domain**: www.myaiskills.co.za
- **Container Port**: 3751 (internal: 80)
- **AWS Account**: 197128983777
- **AWS Region**: af-south-1
- **ECR Repository**: vukufunde/myaiskills-website
- **GitHub**: https://github.com/thakhutsedev/myaiskills-website

## Prerequisites
1. AWS CLI configured with credentials
2. Docker and docker-compose installed
3. Access to production server
4. Nginx configured as reverse proxy

## Deployment Steps

### 1. On Production Server

```bash
# Clone or pull latest code
cd /path/to/deployment
git clone https://github.com/thakhutsedev/myaiskills-website.git
cd myaiskills-website

# Or pull latest changes
git pull origin main

# Deploy using the deployment script
./deploy.sh latest

# Or deploy a specific version
./deploy.sh 77a256d
```

### 2. Manual Deployment (Alternative)

```bash
# Authenticate with ECR
aws ecr get-login-password --region af-south-1 | \
  docker login --username AWS --password-stdin \
  197128983777.dkr.ecr.af-south-1.amazonaws.com

# Pull image
docker pull 197128983777.dkr.ecr.af-south-1.amazonaws.com/vukufunde/myaiskills-website:latest

# Set environment variables
export ECR_URI=197128983777.dkr.ecr.af-south-1.amazonaws.com/vukufunde/myaiskills-website
export IMAGE_TAG=latest

# Deploy with docker-compose
docker-compose -f docker-compose.prod.yml up -d

# Check status
docker ps
docker logs myaiskills-web
```

## Nginx Configuration

Create `/etc/nginx/sites-available/myaiskills.co.za`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name www.myaiskills.co.za myaiskills.co.za;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.myaiskills.co.za myaiskills.co.za;

    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/www.myaiskills.co.za/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/www.myaiskills.co.za/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Proxy to Docker container
    location / {
        proxy_pass http://127.0.0.1:3751;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Logging
    access_log /var/log/nginx/myaiskills_access.log;
    error_log /var/log/nginx/myaiskills_error.log;
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/myaiskills.co.za /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## SSL Certificate Setup

```bash
# Install certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d www.myaiskills.co.za -d myaiskills.co.za

# Test auto-renewal
sudo certbot renew --dry-run
```

## Health Checks

Check container health:
```bash
docker ps
docker logs myaiskills-web
curl -I http://localhost:3751
curl -I https://www.myaiskills.co.za
```

## Rollback

To rollback to a previous version:
```bash
./deploy.sh [previous-commit-hash]
```

## Monitoring

View logs:
```bash
# Container logs
docker logs -f myaiskills-web

# Nginx logs
sudo tail -f /var/log/nginx/myaiskills_access.log
sudo tail -f /var/log/nginx/myaiskills_error.log
```

## Troubleshooting

### Container not starting
```bash
docker logs myaiskills-web
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up
```

### Port already in use
```bash
sudo lsof -i :3751
# Kill the process or use a different port
```

### SSL issues
```bash
sudo certbot certificates
sudo certbot renew --force-renewal
```

## CI/CD Pipeline (Future)

Consider setting up automated deployments using:
- GitHub Actions
- AWS CodePipeline
- Jenkins

Example GitHub Actions workflow structure:
1. Build Docker image on push to main
2. Tag with commit hash
3. Push to ECR
4. SSH to production server
5. Run deployment script
