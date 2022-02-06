# Binance Notifier

---

The application was created to inform about placed orders from Binance on Telegram.

The application works without any problems on Orange Pi Zero.

I recommend using `pm2` to monitor the application.

If you have an idea, suggestion, or just want to report a bug. Just create an issue on GitHub.

---

## Installation

```shell
git clone https://github.com/tatarysh/binance-notifier.git
cd binance-notifier
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
### TODO:

- tests
- logs
- multiple channels
- price alerts (?)
