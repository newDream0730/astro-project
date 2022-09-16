// Static
						const frontmatter = {"layout":"../../../../../layouts/GlobalNavOnlyLayout.astro","title":"Child of subdirectory1","linkLabel":"child-of-subdirectory1","href":"/auto-index/directory1/child-of-subdirectory1"};
						const file = "D:/work/astro/astro-auth-example/src/pages/en/auto-index/directory1/child-of-subdirectory1/index.md";
						const url = "/gpm-lds-astro/en/auto-index/directory1/child-of-subdirectory1";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.c; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
