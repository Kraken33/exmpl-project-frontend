FROM node:12-alpine
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
EXPOSE 3000
CMD npm run start