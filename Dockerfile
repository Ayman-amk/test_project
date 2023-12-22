# Use an official Node runtime as a parent image
FROM node:21

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install NestJS dependencies
RUN npm install

# Copy the local NestJS code to the container
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run NestJS app when the container launches
CMD ["npm", "run", "start:dev"]
