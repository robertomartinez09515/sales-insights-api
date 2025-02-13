# Use official Node.js LTS image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Copy environment variables
COPY .env .env

# Expose the port the app runs on
EXPOSE 3000

# Set environment variable for production mode
ENV NODE_ENV=production

# Build the Next.js app
RUN npm run build

# Start the server
CMD ["npm", "run", "start"]
