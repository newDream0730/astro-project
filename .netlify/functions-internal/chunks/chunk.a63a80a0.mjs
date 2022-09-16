// Static
						const frontmatter = {"title":"Page 3","description":"Lorem ipsum dolor sit amet - 3","layout":"../../layouts/GlobalNavWithSidebarTocLayout.astro"};
						const file = "D:/work/astro/astro-auth-example/src/pages/en/page-3.md";
						const url = "/gpm-lds-astro/en/page-3";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.h; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
