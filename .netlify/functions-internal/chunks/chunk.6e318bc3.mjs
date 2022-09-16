// Static
						const frontmatter = {"title":"Page 4","description":"Lorem ipsum dolor sit amet - 4","layout":"../../layouts/GlobalNavWithSidebarTocLayout.astro"};
						const file = "D:/work/astro/astro-auth-example/src/pages/en/page-4.md";
						const url = "/en/page-4";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.i; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
