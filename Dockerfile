# stage: 1
FROM node:16.5.0-alpine3.11 as react-build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock /app/
RUN yarn --silent

COPY . /app/

RUN yarn build

# stage 2 - the production environment
FROM nginx:1.21.1-alpine
COPY --from=react-build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
