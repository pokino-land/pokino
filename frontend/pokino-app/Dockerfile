### Build ###
FROM node:12.7-alpine AS build
RUN apk add chromium
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
ENV CHROME_BIN=/usr/bin/chromium-browser
RUN npm install
COPY . .
RUN npm run test
#RUN npm run build

### Run the app ###
#FROM nginx:1.17.1-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /usr/src/app/dist/pokino /usr/share/nginx/html

#EXPOSE 4200