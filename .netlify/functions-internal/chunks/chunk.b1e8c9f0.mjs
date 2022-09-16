// Static
						const frontmatter = {"layout":"../../../layouts/GlobalNavOnlyLayout.astro","title":"Home","linkLabel":"Home","href":"/home"};
						const file = "D:/work/astro/astro-auth-example/src/pages/en/home/index.md";
						const url = "/en/home";
						
						// Deferred
						async function load() {
							return (await import('../entry.mjs').then(function (n) { return n.j; }));
						}						function Content(...args) {
							return load().then((m) => m.default(...args))
						}
						Content.isAstroComponentFactory = true;
						function getHeaders() {
							return load().then((m) => m.metadata.headers)
						}

export { Content, load as default, file, frontmatter, getHeaders, url };
