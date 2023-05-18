const { exec } = require("child_process");

const buildProcess = exec(`node ./node_modules/pigeon-mode-game-library/cli/createLib && tsc --preserveWatchOutput --p ./src/tsconfig.json --outDir ./node_modules/pigeon-mode-game-library/game-lib && tsc --preserveWatchOutput --p ./node_modules/pigeon-mode-game-library/hot-reload/tsconfig.json --outDir ./node_modules/pigeon-mode-game-library/hot-reload-lib && esbuild ./node_modules/pigeon-mode-game-library/game-lib/index.js --bundle --sourcemap --outfile=./node_modules/pigeon-mode-game-library/out/game-script.js && esbuild ./node_modules/pigeon-mode-game-library/hot-reload-lib/index.js --bundle --sourcemap --outfile=./node_modules/pigeon-mode-game-library/out/library-script.js && node ./node_modules/pigeon-mode-game-library/cli/buildHTML && npm-build-zip --source=./node_modules/pigeon-mode-game-library/out`);

buildProcess.stdout.on("data", (data) => {
  console.log(data);
});
buildProcess.stderr.on("data", (data) => {
  console.error(data);
});