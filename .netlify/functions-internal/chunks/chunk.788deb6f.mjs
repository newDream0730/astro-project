// Static
						const frontmatter = {"layout":"../../../layouts/GlobalNavWithChildrenNavLayout.astro","title":"Auto index Layout","linkLabel":"Auto index"};
						const file = "D:/work/astro/astro-auth-example/src/pages/en/auto-index/index.md";
						const url = "/gpm-lds-astro/en/auto-index";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.a; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
