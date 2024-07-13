# Frontend Mentor Challenge - Time tracking dashboard

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw "https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw").

## Table of contents

-   [Overview](#overview)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
        -   [Animation](#animation)
        -   [Deploy to GitHub Pages using GitHub Action](#deploy-to-github-pages-using-github-action)
-   [Resources](#resources)

## Overview

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size

-   See hover states for all interactive elements on the page

-   Switch between viewing Daily, Weekly, and Monthly stats

Links:

-   GitHub Repo: <https://github.com/xup60521/react-time-tracking-dashboard-with-animation>

-   Website: [https://xup60521.github.io/react-time-tracking-dashboard-with-animation/](https://xup60521.github.io/react-time-tracking-dashboard-with-animation/#/)

```bash
# install dependencies
pnpm install
# start dev server
pnpm run dev
```

## My process

### Built with

-   React (powered by vite)

-   TailwindCSS

-   framer-motion

-   react-router-dom

### What I learned

#### Animation

Though it’s not required, some animation can hugely improve the user experience.

I used framer-motion to animate the transition. The biggest challenge is that sometimes the exit animation doesn’t perform. By adjusting where to place `<AnimatePresence />`, it finally worked.

Other than that, I also changed the delay.

```tsx
<motion.div
    key={`${timeSpan} ${index}`}
    initial={{ opacity: 0, x: -20 }}
    animate={{
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.05 * (index + 1) + 0.15,
        },
    }}
    exit={{ opacity: 0, x: 20 }}
    transition={{
        delay: 0.05 * index,
        type: "spring",
    }}
>
    {/* ... */}
</motion.div>
```

The transition animation looks good. Compared to vanilla or TailwindCSS, it’s much easier to do using framer-motion.

However, `motion.div` needs the position to be absolute. It’s a little bit harder to get the correct size.

#### Deploy to GitHub Pages using GitHub Action

Originally I wanted to use `gh-pages` to deploy to github pages. But it turned out the repo name was too long, and `gh-pages -d dist` failed.

Vite’s official website provides a workflow example. However, since I use `pnpm`, it requires some configuration.

First, we need to specify the pnpm version.

```bash
// get pnpm version
pnpm -v
```

Edit `package.json`

```json
{
    "packageManager": "pnpm@9.5.0"
}
```

In order to actually use pnpm in the workflow, we need to modify the vite example script.

Add the following lines at `jobs/deploy/steps`.

```yaml
- name: Setup pnpm
  uses: pnpm/action-setup@v4.0.0
```

Of course, all the `npm` should be replaced with `pnpm`.

In `vite.config.ts`, add a base

```ts
export default defineConfig({
    plugins: [react()],
    // to make import alias work in vite
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    // github page url is https://<user_name>.github.io/<repo_name>
    // specify base to <repo_name>
    base: "/react-time-tracking-dashboard-with-animation",
});
```

Whenever we push a change to the main branch, it will deploy to GitHub Pages automatically.

## Resources

-   TailwindCSS Docs - <https://tailwindcss.com/docs>

-   Google font - <https://fonts.google.com>

-   Vite example script - <https://vitejs.dev/guide/static-deploy.html#github-pages>

-   pnpm github action setup script - <https://github.com/pnpm/action-setup>

-   framer-motion docs - <https://www.framer.com/motion/>
