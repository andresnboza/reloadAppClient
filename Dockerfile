# Stage 1
FROM node:10-alpine as build-step

RUN mkdir -p /app 

WORKDIR /app 
COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

# Stage 2
FROM nginx:1.17.1-alpine

# Clean nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy dist
COPY --from=build-step /app/dist/<replace me> /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

# Permission
RUN chown root /usr/share/nginx/html/*
RUN chmod 755 /usr/share/nginx/html/*

# Expose port
EXPOSE 3000

# Start
CMD ["nginx", "-g", "daemon off;"]