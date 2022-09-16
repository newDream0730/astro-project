import AstroAuth from "@astro-auth/core";
import { GithubProvider } from "@astro-auth/providers";


export function getStaticPaths() {
    return [
      // Generates: /dogs/clifford
      {params: {astroauth: 'github'}},
    ];
}

export const all = AstroAuth({
  authProviders: [
    GithubProvider({
      clientId: "9b35f3c854641c1938d3",
      clientSecret: "cc8bb2f7d43f13ee2b6e8a726521b75cfb0f84f1",
    }),
  ]
});
