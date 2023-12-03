FROM ubuntu:22.04

WORKDIR /app

RUN apt update
RUN apt install -y ca-certificates curl gnupg
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt update
RUN apt install nodejs -y

RUN npm install -g yarn

COPY . .
RUN yarn install --frozen-lockfile

RUN yarn api-build
RUN npx playwright install --with-deps chromium
RUN npx prisma generate

RUN chmod +x ./packages/api/scripts/start.sh

CMD ["sh", "./packages/api/scripts/start.sh"]
