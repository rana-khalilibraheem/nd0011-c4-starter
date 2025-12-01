const { series } = require("gulp");
const shell = require("gulp-shell");

function parcel() {
  return shell.task("npx parcel build index.html --dist-dir dist")();
}

function test() {
  return shell.task("npx cypress run")();
}

exports.default = parcel;
exports.test = series(parcel, test);
