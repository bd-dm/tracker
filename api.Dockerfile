FROM node:20-alpine as builder

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .
COPY ./packages/api ./packages/api

RUN yarn install --frozen-lockfile

WORKDIR /app/packages/api
RUN yarn build

FROM ubuntu:22.04 as runner

WORKDIR /app

RUN apt update
RUN apt install -y ca-certificates curl gnupg
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt update
RUN apt install nodejs -y
RUN npm install -g yarn

COPY ./package.json .
COPY ./yarn.lock .
COPY ./packages/api ./packages/api

RUN yarn install --frozen-lockfile --production
RUN npx playwright install --with-deps chromium

COPY --from=builder /app/packages/api/dist ./packages/api/dist
COPY ./scripts/start-api.sh ./scripts/start-api.sh

RUN chmod +x ./scripts/start-api.sh

CMD ["sh", "./scripts/start-api.sh"]
