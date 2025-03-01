# Use a Node.js base image for the backend
FROM node:18-alpine

# Install GCC and Python inside the same container
RUN apk add --no-cache g++ python3 py3-pip

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose a port for the backend
EXPOSE 3000

# Start the backend
CMD ["npm", "start"]
