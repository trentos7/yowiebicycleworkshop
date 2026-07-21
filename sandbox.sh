#!/bin/bash

# Get the absolute path of the directory you are currently standing in
CURRENT_DIR=$(pwd)
CONTAINER_NAME="ai-sandbox-env"

echo "🚀 Spinning up AI Dev Sandbox for: $CURRENT_DIR"

# Check if an old container with the same name is lingering around and remove it
if [ "$(docker ps -aq -f name=${CONTAINER_NAME})" ]; then
    echo "🧹 Cleaning up previous sandbox session..."
    docker rm -f ${CONTAINER_NAME} > /dev/null
fi

# Run the container seamlessly
docker run -it \
  --name ${CONTAINER_NAME} \
  -v "$CURRENT_DIR":/workspace \
  -v "$HOME/ai-sandbox/.gemini_home":/home/developer/.gemini \
  ai-dev-sandbox
