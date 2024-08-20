# Deploy

This is a project based on Docker.

use Docker to run this project

```shell
docker compose up -d
```

```shell
docker build -t sjxt-frontend ./frontend
docker run -p 800:80 -d sjxt-frontend
```

then the project will run on `localhost:800`