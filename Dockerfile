# stage1 as builder
FROM node:12-alpine as builder

ARG APP_NAME

RUN echo "Your container name: ${APP_NAME}"

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /${APP_NAME} && mv ./node_modules ./${APP_NAME}

WORKDIR /${APP_NAME}

COPY . .

# Build the project and copy the files
RUN npm run build


FROM nginx:alpine

#!/bin/sh

COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /${APP_NAME}/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]