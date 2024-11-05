FROM node:20.17.0-alpine AS build

ARG ENVIRONMENT=prod

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npm install -g @angular/cli

COPY . .

RUN npm run build --configuration=${ENVIRONMENT}

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/inventary-frontend/browser /usr/share/nginx/html

EXPOSE 80
