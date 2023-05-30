#SEO stuff
,
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
	},
	in vite.config so we have this for sitemap.xml

	https://rodneylab.com/sveltekit-faq-page-seo/

# Google Sheet data fatching

[fetch_gsheet_data.sh](fetch_gsheet_data.sh) bash script is used in action workflow or locally (needs param access key to be passed). API access key is places in private KeyVault on Github.
For local dev you can change this file even manually if you want to see the change. 2 time a day [gsheet_deploy_pages.yml](.github/workflows/deploy_to_pages.yml) will be kicked off and if there is a change in google sheets new version will get deployed.

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


My:
https://www.npmjs.com/package/@sveltejs/adapter-static

https://tailwindcss.com/docs/guides/sveltekit

https://dev.to/brewhousedigital/adding-tailwind-and-daisy-ui-to-sveltekit-2hk5

#For github pages import to use {base} from https://kit.svelte.dev/docs/configuration

svelte-config
```js
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const prod = process.env.NODE_ENV === "production"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		paths: {
			base: prod ? '/teslapanelimalakrsna' : '',
		}
	}
};

export default config;

```



