FROM node:16

USER 1000:1000
WORKDIR /app
COPY --chown=1000:1000 package.json package-lock.json .npmrc /app/
RUN npm install

COPY --chown=1000:1000 . /app/
# .env.local must contain NEXT_PUBLIC_ variables
COPY --chown=1000:1000 .env.local /app/.env.local
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
