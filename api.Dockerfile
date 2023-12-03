FROM node:20-alpine as builder

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .
COPY ./packages/api ./packages/api

RUN yarn install --frozen-lockfile

WORKDIR /app/packages/api
RUN yarn build

FROM mcr.microsoft.com/playwright:v1.40.0 as runner

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .
COPY ./packages/api ./packages/api

RUN yarn install --frozen-lockfile --production

COPY --from=builder /app/packages/api/dist ./packages/api/dist
COPY ./scripts/start-api.sh ./scripts/start-api.sh

RUN chmod +x ./scripts/start-api.sh

CMD ["sh", "./scripts/start-api.sh"]
