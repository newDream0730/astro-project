// Static
						const frontmatter = {"layout":"../../../../layouts/GlobalNavWithChildrenNavLayout.astro","title":"Subdirectory1","linkLabel":"Subdirectory1"};
						const file = "D:/work/astro/astro-auth-example/src/pages/en/auto-index/directory1/index.md";
						const url = "/en/auto-index/directory1";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.b; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
