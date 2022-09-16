GPM (Governance, Planning and Management) is an [Astro](https://astro.build) template and NPM packages for publishing product engineering and project management documents and content.

## Getting started with GPM

1. Set the project name and prepare the local project directory:

```bash
export GPM_PROJECT=my-gpm
git clone https://github.com/shah/gpm-lds-astro.git $GPM_PROJECT
rm -rf $GPM_PROJECT/.git
```

2. Open `$GPM_PROJECT/astro.config.mjs` and set the Astro [site](https://docs.astro.build/en/reference/configuration-reference/#site) and [base](https://docs.astro.build/en/reference/configuration-reference/#base) directories to the proper values expected by Astro:

```js
export default defineConfig({
  integrations: [react(), mdx()],
  site: 'https://shah.github.io',
  base: '/gpm-lds-astro',
  clientEntrypoint: '@astrojs/react/client.js',
});
```

2. Now run the project:

```bash
cd $GPM_PROJECT
npm run dev
```

You can see the local site at `http://localhost:3000/gpm-lds-astro/en`.

4. Start the GPM documentation project:

```bash
cd $GPM_PROJECT/support/docs
npm run dev
```

You can see the documentation at `http://localhost:3000/gpm-lds-astro-docs/en`.

You are ready now to manage your GPM content by modifying or adding files in `pages` directory. Follow directions given in `http://localhost:3000/gpm-lds-astro-docs/en/getting-started`.

## Maintaining your GPM site

The GPM Astro template should be kept updated by using:

```bash
npm run maintain
```
<mark>Note from Shahid</mark>: Mauro and Juan Pablo please work with Manuel and Mustafa to see what "regular" tasks are (such as `npm upgrade`) and bundle them into `npm run maintain`.

## Troubleshooting

Note from Shahid: Mauro and Juan Pablo please interview me about the `doctor` command and how we use it in the current GPM repos so we can do the same for future ones.

```bash
npm run doctor
```
