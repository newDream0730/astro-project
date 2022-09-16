// Static
						const frontmatter = {"title":"Page 2","description":"Lorem ipsum dolor sit amet - 2","layout":"../../layouts/GlobalNavWithSidebarTocLayout.astro"};
						const file = "D:/work/astro/astro-auth-example/src/pages/en/page-2.md";
						const url = "/gpm-lds-astro/en/page-2";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.g; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
