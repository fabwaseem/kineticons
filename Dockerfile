# Kineticons website: built as static files, served by nginx. Coolify: use the "Dockerfile" build pack, port 80.
# Optional build args: NEXT_PUBLIC_SITE_URL (canonical address), NEXT_PUBLIC_REPO_URL.

FROM node:22-alpine AS build
ARG NEXT_PUBLIC_SITE_URL=https://kineticons.fabwaseem.com
ARG NEXT_PUBLIC_REPO_URL=https://github.com/fabwaseem/kineticons
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL NEXT_PUBLIC_REPO_URL=$NEXT_PUBLIC_REPO_URL NEXT_TELEMETRY_DISABLED=1 CI=true
RUN corepack enable
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
# the site needs only the core and React packages built; then the site itself
RUN pnpm --filter @kineticons/core build && pnpm --filter kineticons build && pnpm --filter web build

FROM nginx:1.27-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/apps/web/out /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
