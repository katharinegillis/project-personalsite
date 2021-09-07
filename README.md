# katharinegillis/project-personalsite

This is the frontend microservice for katiecordescodes.com.

## Development set up

### Prerequisites:

- Docker
- Traefic 2.0 running and able to detect docker container labels

### Set up steps:

1. Clone the repository.
2. Navigate to the cloned repository.
3. Create the .env file with the following variables filled in (feel free to adjust as desired):
```env
SITE_URL="katiecordescodes.docker"
```
4. Run the development containers: `docker-compose up -d`

To turn it off, `docker-compose down`.

You can browse to the site at `http://<SITE_URL>:8080`.