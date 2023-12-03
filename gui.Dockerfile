FROM node:20-alpine as builder

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .
COPY ./packages/gui ./packages/gui
COPY ./packages/api-client ./packages/api-client

RUN yarn install --frozen-lockfile
RUN yarn gui:build

FROM node:20-alpine as runner

WORKDIR /app

COPY --from=builder /app/packages/gui/public ./public
COPY --from=builder /app/packages/gui/.next/standalone ./.next/standalone
COPY --from=builder /app/packages/gui/.next/static ./.next/static
COPY ./scripts/start-gui.sh ./scripts/start-gui.sh

RUN chmod +x ./scripts/start-gui.sh

CMD ["sh", "./scripts/start-gui.sh"]
