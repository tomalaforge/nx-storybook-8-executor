## Introduction

The goal of this repo is to provide a small reproduction of an issue with storybook 8 and `runExecutor` from `@nx/devkit`.

if you run `nx run test:storybook`, everything works normally

However, I created a custom executor that runs the above command, and when I run ` nx run test:run-story`, it fails with the following error:

```bh
SB_CORE-SERVER_0002 (CriticalPresetLoadError): Storybook failed to load the following preset: ./libs/test/.storybook/main.ts.

Please check whether your setup is correct, the Storybook dependencies (and their peer dependencies) are installed correctly and there are no package version clashes.

If you believe this is a bug, please open an issue on Github.

SB_CORE-SERVER_0002 (CriticalPresetLoadError): Storybook failed to load the following preset: ./node_modules/@storybook/addon-essentials/dist/index.js.

Please check whether your setup is correct, the Storybook dependencies (and their peer dependencies) are installed correctly and there are no package version clashes.

If you believe this is a bug, please open an issue on Github.

SB_CORE-SERVER_0002 (CriticalPresetLoadError): Storybook failed to load the following preset: @storybook/addon-essentials/docs.

Please check whether your setup is correct, the Storybook dependencies (and their peer dependencies) are installed correctly and there are no package version clashes.

If you believe this is a bug, please open an issue on Github.

SB_CORE-SERVER_0002 (CriticalPresetLoadError): Storybook failed to load the following preset: ./node_modules/@storybook/addon-essentials/dist/docs/preset.js.

Please check whether your setup is correct, the Storybook dependencies (and their peer dependencies) are installed correctly and there are no package version clashes.

If you believe this is a bug, please open an issue on Github.

Error [ERR_REQUIRE_ESM]: require() of ES Module ./node_modules/rehype-slug/index.js from ./node_modules/@storybook/addon-docs/dist/preset.js not supported.
Instead change the require of index.js in ./node_modules/@storybook/addon-docs/dist/preset.js to a dynamic import() which is available in all CommonJS modules.
    at Object.newLoader [as .js] (./node_modules/pirates/lib/index.js:121:7)
    at Module.require (./node_modules/nx/src/adapter/compat.js:65:40)
    at Object.<anonymous> (./node_modules/@storybook/addon-docs/dist/preset.js:47:8978)
    at loadPreset (./node_modules/@storybook/core-common/dist/index.js:12:59)
    at loadPreset (./node_modules/@storybook/core-common/dist/index.js:12:59)
    at async Promise.all (index 0)
    at async loadPresets (./node_modules/@storybook/core-common/dist/index.js:12:483)
    at async loadPreset (./node_modules/@storybook/core-common/dist/index.js:10:1291)
    at async Promise.all (index 0)
    at async loadPresets (./node_modules/@storybook/core-common/dist/index.js:12:483)
    at async loadPreset (./node_modules/@storybook/core-common/dist/index.js:10:1291)
    at async Promise.all (index 1)
    at async loadPresets (./node_modules/@storybook/core-common/dist/index.js:12:483)
    at async getPresets (./node_modules/@storybook/core-common/dist/index.js:12:1503)
    at loadPreset (./node_modules/@storybook/core-common/dist/index.js:12:59)
    at async Promise.all (index 0)
    at async loadPresets (./node_modules/@storybook/core-common/dist/index.js:12:483)
    at async loadPreset (./node_modules/@storybook/core-common/dist/index.js:10:1291)
    at async Promise.all (index 1)
    at async loadPresets (./node_modules/@storybook/core-common/dist/index.js:12:483)
    at async getPresets (./node_modules/@storybook/core-common/dist/index.js:12:1503)
    at async buildDevStandalone (./node_modules/@storybook/core-server/dist/index.js:65:2020)
    at async withTelemetry (./node_modules/@storybook/core-server/dist/index.js:28:3579)
    at loadPreset (./node_modules/@storybook/core-common/dist/index.js:12:59)
    at async Promise.all (index 1)
    at loadPresets (./node_modules/@storybook/core-common/dist/index.js:12:483)
    at getPresets (./node_modules/@storybook/core-common/dist/index.js:12:1503)
    at buildDevStandalone (./node_modules/@storybook/core-server/dist/index.js:65:2020)
    at withTelemetry (./node_modules/@storybook/core-server/dist/index.js:28:3579)

WARN   Failed to load preset: {"name":"/Users/thomaslaforge/Documents/Project/rosa/org/node_modules/@storybook/addon-essentials/dist/docs/preset.js"} on level 3
Error [ERR_REQUIRE_ESM]: require() of ES Module ./node_modules/rehype-slug/index.js from ./node_modules/@storybook/addon-docs/dist/preset.js not supported.
Instead change the require of index.js in ./node_modules/@storybook/addon-docs/dist/preset.js to a dynamic import() which is available in all CommonJS modules.
    at Object.newLoader [as .js] (./node_modules/pirates/lib/index.js:121:7)
    at Module.require (./node_modules/nx/src/adapter/compat.js:65:40)
    at Object.<anonymous> (./node_modules/@storybook/addon-docs/dist/preset.js:47:8978)
```

