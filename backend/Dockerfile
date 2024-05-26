FROM node:20


# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y

WORKDIR /src/app

COPY ./package.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 1337

CMD yarn start
