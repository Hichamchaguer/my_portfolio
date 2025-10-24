FROM node:18-alpine

WORKDIR /app

# Copy package files first so we can install dependencies before copying the rest
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy app source
COPY . .

# Build the app for production (keeps image useful for preview/build)
RUN npm run build

EXPOSE 5173

# Run the dev server by default. When using docker-compose with a bind mount
# we make sure not to overwrite container's node_modules (see docker-compose.yaml)
CMD ["npm", "run", "dev"]
