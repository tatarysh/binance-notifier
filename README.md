# Installation

```shell
yarn install
yarn build
```

You must define the following environment variables in your `.env` file:

- `BINANCE_API_KEY`
- `BINANCE_SECRET_KEY`
- `TELEGRAM_TOKEN`
- `TELEGRAM_CHAT_ID`

```shell
cp .env.example .env
nano .env
````

If you set all the variables, you can start the applications.

```shell
yarn start
```
-------
## TODO:

- multiple channels (slack, discord, email)
- template for messages
