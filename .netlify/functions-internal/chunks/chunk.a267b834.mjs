// Static
						const frontmatter = {"title":"Introduction","description":"Docs intro","layout":"../../layouts/GlobalNavWithSidebarTocLayout.astro"};
						const file = "D:/work/astro/astro-auth-example/src/pages/en/introduction.md";
						const url = "/en/introduction";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n._; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
