FROM node:lts AS deps
WORKDIR /thepeoplespurse
COPY package.json yarn.lock ./
RUN yarn install

FROM node:lts AS builder
WORKDIR /thepeoplespurse
COPY . .
COPY --from=deps /thepeoplespurse/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:lts AS runner
WORKDIR /thepeoplespurse
ENV NODE_ENV production
COPY --from=builder /thepeoplespurse/next.config.js ./
COPY --from=builder /thepeoplespurse/public ./public
COPY --from=builder /thepeoplespurse/.next ./.next
COPY --from=builder /thepeoplespurse/node_modules ./node_modules
COPY --from=builder /thepeoplespurse/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]