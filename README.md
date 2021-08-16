# Phlareact: Preact meets Flareact

<a href="https://deploy.workers.cloudflare.com/?url=https://github.com/nberlette/flareact-template&paid=true" target="_blank"><img src="https://img.shields.io/badge/Deploy-Cloudflare%20Worker-f8ae18.svg" alt="Deploy to Cloudflare Workers" /></a> &mdash; <em>Deploy to Cloudflare Workers in 5 minutes or less, right from your browser.</em>

Not a fan of GUIs? You can install the official [Wrangler CLI](https://github.com/cloudflare/wrangler) and manage your Workers all from the command line.

---

## 1. Install Wrangler CLI and generate a project from this template

Once Wrangler has installed and authenticated your account, you can now tell Wrangler to generate a new project from this template repository. `my-project` can be any name you want, and that will be the working directory that's created for your new project.

```bash
wrangler generate my-project https://github.com/nberlette/flareact-template
```

<br>

## 2. Add your account details to wrangler.toml

* Open your favorite text editor and fill in `account_id` and `name` inside `wrangler.toml`. I'm working on a helper script to eliminate this manual step from the process.

* The `name` field will be your desired subdomain on `workers.dev` (as long as `workers_dev = true`).

> You can find account_id in the sidebar of your site's Cloudflare Dashboard.


<br>

## 3. Start the development server

```bash
 cd my-project && yarn dev
```

Spool up the Wrangler Development Server and enjoy the hot reloading as you work! You can add/edit files in the `pages/` folder and watch the changes take effect in real time.

> Note: don't run `wrangler dev` or it will skip the Flareact portion of the script!

<br>

## 4. Publish to Cloudflare Workers

Once you're satisfied with your project's progress, and want to see how it performs in deployment, simply run the following command to publish your site:

```bash
 yarn publish
```

<br>

If you'd like to fix any errors in the code prior to deploying it, just lint before publishing:

```bash
 yarn lint:fix && yarn publish
```

<br>

### Acknowledgements

Based on the [original Flareact Template](https://github.com/flareact/flareact-template). I just added further instructions and goodies I felt would be useful to other developers.
