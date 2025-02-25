FROM oven/bun:1.2.3 AS base
WORKDIR /

COPY . /
RUN bun install

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "start" ]