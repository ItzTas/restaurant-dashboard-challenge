FROM node:22

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

EXPOSE 3000

CMD [ "yarn", "run", "dev:docker" ]
