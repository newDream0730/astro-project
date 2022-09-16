// Static
						const frontmatter = {"layout":"../../../../layouts/GlobalNavWithChildrenNavLayout.astro","title":"Subdirectory3","linkLabel":"Subdirectory3"};
						const file = "D:/work/astro/astro-auth-example/src/pages/en/auto-index/directory3/index.md";
						const url = "/en/auto-index/directory3";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.e; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
