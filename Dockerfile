FROM node:18-alpine AS base

WORKDIR /app

ARG NEXT_PUBLIC_POKEMON_API_URL
ARG NEXT_PUBLIC_TIME_API_URL

ENV NEXT_PUBLIC_POKEMON_API_URL=$NEXT_PUBLIC_POKEMON_API_URL
ENV NEXT_PUBLIC_TIME_API_URL=$NEXT_PUBLIC_TIME_API_URL

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps --no-audit --no-fund

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
