# Use official Node.js 18 base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy all local files into the container
COPY . .

# Install Node.js dependencies
RUN npm install

# Download Goose agent binary (example URL – replace with real one)
RUN curl -o goose https://example.com/goose-agent && chmod +x goose

# Expose the port your app runs on
EXPOSE 3000

# Start Goose agent and Node.js app together
CMD ["sh", "-c", "./goose & npm start"]
