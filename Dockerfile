# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:14 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN ng build --prod

FROM nginx:alpine
COPY /dist/client /usr/share/nginx/html