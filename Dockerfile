FROM node:10.16.0 as frontend_builder

WORKDIR /code

ADD package.json .
ADD yarn.lock .

RUN yarn install

ADD . .

RUN yarn run build

FROM nginx:alpine

RUN ls -la

COPY --from=frontend_builder /code/build /usr/share/nginx/html


ADD nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]