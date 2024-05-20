#!/bin/bash
set -e

# Pull the Docker image from Docker Hub
docker pull veapee/frontend-kafe:latest

REACT_APP_BACKEND_URL=$(aws ssm get-parameters --region ap-southeast-2 --names REACT_APP_BACKEND_URL --with-decryption --query Parameters[0].Value --output text)
echo "REACT_APP_BACKEND_URL: $REACT_APP_BACKEND_URL"

# Run the Docker image as a container
docker run -dit -p 80:80 -e REACT_APP_BACKEND_URL="$REACT_APP_BACKEND_URL" veapee/frontend-kafe

