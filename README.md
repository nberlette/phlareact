# Flareact Template for Cloudflare Workers

## Getting Started

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button?paid=true)](https://deploy.workers.cloudflare.com/?url=https://github.com/nberlette/flareact-template&paid=true)

Click the button above to deploy Flareact in 5 minutes or less, right from your browser.

### Install the Wrangler CLI

 Not a fan of GUIs? You can install the official [Wrangler CLI](https://github.com/cloudflare/wrangler) from Cloudflare® and manage your Workers entirely from the command line.

### `wrangler generate...`

Once Wrangler has installed and authenticated your account, fire off this command:

```bash
 $ wrangler generate my-project https://github.com/nberlette/flareact-template
```

### `vim wrangler.toml`

Open your favorite text editor and fill in `account_id` and `name` inside `wrangler.toml`. I'm working on a helper script to eliminate this manual step from the process.

You can find your `account_id` in the sidebar of your Cloudflare Dashboard. The `name` field will be your subdomain on `workers.dev`, so long as the `workers_dev = true` setting remains `true`.

### `yarn dev` or `npm run dev`

Spool up the Wrangler Development Server and enjoy the hot reloading as you work!

> Note: don't run `wrangler dev` or it will skip the Flareact portion of the script!

### Make it your own

You can add/edit files in the `pages/` folder and watch the changes take effect in real time.

## Acknowledgements

Based on the [original Flareact Template](https://github.com/flareact/flareact-template). I just added further instructions and goodies I felt would be useful to other developers. Enjoy!
