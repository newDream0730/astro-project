// Static
						const frontmatter = {"layout":"../../../layouts/GlobalNavWithSidebarTocLayout.astro","title":"Contact","linkLabel":"Contact","href":"/contact"};
						const file = "D:/work/astro/astro-auth-example/src/pages/en/contact/index.md";
						const url = "/en/contact";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.f; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
