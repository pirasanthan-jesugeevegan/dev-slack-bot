FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

FROM gcr.io/distroless/nodejs:14

COPY --from=build /app /app

WORKDIR /app

CMD ["."]