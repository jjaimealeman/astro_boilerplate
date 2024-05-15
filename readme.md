Wednesday, April 10, 2024 @ 09:21:29 PM

```sh
npm create astro@latest
pnpm astro add tailwind
pnpm i --save-dev @types/node

pnpm i -D eslint eslint-plugin-astro eslint-plugin-jsx-a11y @typescript-eslint/parser prettier prettier-config-standard prettier-plugin-astro

pnpm i -D prettier-plugin-tailwindcss
```

## TODO

- INSTALL prettier-plugin-tailwindcss
  `.prettierrc.mjs`

```
/** u/type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
```

---

## RESOURCES:

- https://www.kevinzunigacuellar.com/blog/dark-mode-in-astro/
- https://techsquidtv.com/blog/generating-open-graph-images-for-astro/
- https://patheticgeek.dev/blog/astro-prettier-eslint-vscode
- https://straffesites.com/en/blog/integrate-prettier-astro-tailwindcss

- CHECK OUT ANIMATION LIBRARY
- https://barba.js.org
- https://animejs.com/
- https://mojs.github.io/

## INSPIRATION:

- https://layout.ch/en/
- https://glaze.dev/documentation/changelog
- https://saaslandingpage.com/
- https://saasinterface.com/

## TODO

[x] astro/icons
[ ] @tailwindcss/container-queries
[ ] @tailwindcss/typography
[ ] @tailwindcss/forms
[ ] @astrojs/sitemap
[ ] @astrolib/seo
[ ] https://github.com/barvian/fluid-tailwind
