# A HR app

# Run

```sh
docker-compose up
pnpm i
cd packages/server
pnpm dev
cd packages/client
pnpm dev
```

# Connect to redis

```sh
docker exec -it hr-redis sh
redis-cli
```

## List keys

```sh
KEYS *
```

## Get value

```sh
get key-name-here
```
