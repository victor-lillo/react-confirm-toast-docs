# NextJS template with Github and Vercel sync

_This template allows you to create a NextJS project, and easily deploy it on GitHub and Vercel._

## Table of contents
* [Features](#features-)
* [Prerequisites](#prerequisites-)
* [Install](#install-)
* [Config](#config-)
* [Deploy](#deploy-)


## Features ✅

- Different NextJS features implementation examples, such as: server side rendering (SSR), layout with dynamic css classes, CSS modules...
- Support conditionally CSS classes addition [classnames-creator](https://github.com/fentosv/classnames-creator).
- [SASS](https://sass-lang.com/) added.
- Sitemap template, using [ekalinin's sitemap library](https://github.com/ekalinin/sitemap.js).
- Discord webhook notification on web deployment.
- Added rimraf to `yarn dev` for cache problems.

**WIP**
- Navbar with tabs menu on mobile viewports.

### ⚠ Warning ⚠
This project is using `next/future/image``. This component is still experimental and not covered by semver. For more info, check [NextJS docs](https://nextjs.org/docs/api-reference/next/future/image).

## Prerequisites 📋

- [Git](https://git-scm.com/) installed and logged (tested in version `2.34.1.windows.1`)
- [NodeJS](https://nodejs.dev/) (tested in version `17.0.8`)

## Install 🔧

1. Clone this repo.

    ```
    git clone https://github.com/fentosv/template-next-ts.git
    ```

2. Install modules.

    ```
    yarn install
    ```
    or
    ```
    npm install
    ```

3. Rename `.env.example` to `.env` and update the variables.
_Discord variables are optional_. 


## Config ⚙

- Change `name` and `version` fields in package.json.
- Update `.env` variables as you need.
- Build your NextJS app in `.src` folder.


## Scripts 🤖

_For **NextJS** information, go to their [docs](https://nextjs.org/docs)._

| Scripts | Description |
| --- | --- |
| [dev](https://nextjs.org/docs/getting-started) | Starts Next.js in development mode |
| [start](https://nextjs.org/docs/getting-started) | Starts a Next.js production server |
| github-first-deploy | Creates the `.git` and push it to your personal Github repository. |
| github-update | Updates your Github repository. |

## Deploy 🚀

1. [Create](https://github.com/new) a new GitHub repository.

2. Make sure you followed the [installing](#install-) steps and check the [config](#config-). 

3. Add your Git `HTTPS` or `SSH` url to the `.env`.

4. Run the script created for the first deploy. It will set it up the Git with the environment variables.
    ```
    yarn github-first-deploy
    ```

    or

    ```
    npm github-first-deploy
    ```

5. Import Git repositoy in [Vercel](https://vercel.com/new). 
_At this point, you can get the Vercel project link and add it to the .env file._

6. Update you repository when you want. Vercel will update the Production Deployment when you push the Git repository.
```yarn github-update```
or
```npm github-update```
 
