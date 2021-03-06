# syntax=docker/dockerfile:1

# Stage 1: Compile and Build angular codebase
# Use official node image as the base image
FROM node:14 as build

# Set the working directory
WORKDIR /app

COPY package*.json /app/

# Install all the dependencies
RUN npm install

# Add the source code to app
COPY ./ /app/

# Generate production build
RUN npm run build -- --output-path=/app/dist/out --base-href /client/ --configuration production --aot

# Stage 2: Serve app with nginx server
# Use official nginx image as the base image
FROM nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf

RUN rm /etc/nginx/conf.d/default.conf

# Remove nginx defaults and Copy angular production build output from build stage.
RUN rm -rf /usr/share/nginx/html/*
COPY ./services.conf /etc/nginx/conf.d/
COPY --from=build /app/dist/out/* /usr/share/nginx/html/client/

# Expose port 80
EXPOSE 80
EXPOSE 443