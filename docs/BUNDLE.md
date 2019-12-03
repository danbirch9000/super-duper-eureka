# Bundling shared components for distibution

This is repo is built to be consumed by other vue apps as an npm package. The repo is not published to an npm registry but consumed from a git repo.  The Vue components and relevant css get bundled with a npm script. [`.vue` files cannot be used directly](https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#Can%E2%80%99t-I-Just-Share-vue-Files-Directly). To expose chosen components they must be added to `/bundle.js` and exported, e.g.
```
import MyButton from "./src/components/MyButton.vue";
export { MyButton };
```

Files other than `.vue` do not need explicit exports and can be consumed without bundling e.g.
```
@import "~wfp-vue-shared-components/src/assets/scss/var";
```

Bundling does not require a manual step, it is handled on the consumer side when installed.
When the repo is installed the the `prepare` script is run. This in turn runs `bundle`. Files are then added to `dist/` ready for consumption. The benefit of this is no `dist/` files ever get commited in git. The draw back is that the install takes longer during consumer installation as the files are being bundled on the fly. [More info.](https://cloudfour.com/thinks/how-to-distribute-a-pattern-library-as-an-npm-package-from-a-private-git-repo/)

In `package.json` the following keys determine what gets served in the consumer.

`main` determines the main entry point e.g. `import Compontents, { MyButton } from "wfp-vue-shared-components";`
```
"main": "./dist/wfp-vue-shared-components.umd.min.js",
```
`files` determines what files are left not removed from the repo when it's installed
```
"files": ["dist/**/*"]
```

## Installing the package on the consumer

1. Add the following to consumer `package.json` file:

```
"dependencies": {
  "wfp-vue-shared-components": "git+ssh://git@git.hermescloud.co.uk:workforce-portal/wfp-vue-shared-components.git"
  ...
}
```
2. Run the install: `npm i wfp-vue-shared-components`
3. Import the files you need into your project  `import { MyButton } from "wfp-vue-shared-components";`