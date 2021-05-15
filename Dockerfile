FROM node:14 AS deps

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

# Bundle app source
FROM node:14

WORKDIR /usr/src/app
COPY --from=deps /usr/src/app ./

EXPOSE 8080
CMD [ "npm", "run", "start" ]