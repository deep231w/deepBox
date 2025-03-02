FROM node:18-alpine

RUN apk add --no-cache g++ python3 py3-pip

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]
