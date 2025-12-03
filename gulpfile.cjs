const { series } = require("gulp");
const shell = require("gulp-shell");

// build production (parcel build)
function parcelBuild() {
  return shell.task("npx parcel build src/index.html --dist-dir dist")();
}

// run cypress tests (headless)
function cypressRun() {
  return shell.task("npx cypress run")();
}

// run unit tests (mocha)
function unitTest() {
  return shell.task("npx mocha --recursive test")();
}

exports.default = parcelBuild;
exports.test = series(parcelBuild, cypressRun);
exports["test:unit"] = unitTest;
