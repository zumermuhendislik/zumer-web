# Build stage
FROM node:22-alpine AS build
WORKDIR /app

# Copy package management files
COPY package*.json ./
RUN npm ci

# Copy source code and build Vite static bundle
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine AS runner

# Copy built static assets to Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Configure Nginx directly inside Dockerfile (Port 3005 + SPA support)
RUN echo 'server { \
    listen 3005; \
    server_name localhost; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 3005
EXPOSE 3005

CMD ["nginx", "-g", "daemon off;"]
