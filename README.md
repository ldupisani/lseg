# Design decisions

This project is using bun:1.2.3, because its easy to run the website and an API on a single runtime instance. Functionally it is quite similar to a Vite application, but much more efficient and simpler to set up for prototypes.

# Run locally

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
bun dev
```

To run for production:

```bash
bun start
```

# Build and run with Docker

```bash
docker build --pull -t lseg-chat .
docker run -d -p 3000:3000 lseg-chat
```

# Architecture

The frontend is built in react and served as a single bundled static resource as the default path.

There is an additional endpoint to receive queries and send back a message.

# TODO

- Loading indicator for API requests
- Some minor styling changes, such as no robot icon for the bot.
- Unit tests.
