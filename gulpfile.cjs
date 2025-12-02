const { series } = require("gulp");
const shell = require("gulp-shell");

// Task to build the project using Parcel
function parcel() {
  return shell.task("npx parcel build index.html --dist-dir dist")();
}

// Task to run Cypress tests
function cypress() {
  return shell.task("npx cypress run")();
}

// Task to run Mocha tests
function mocha() {
  return shell.task("npx mocha test/**/*.js")();
}

// Task to run all tests sequentially
function test() {
  return series(parcel, mocha, cypress)();
}

exports.default = parcel;
exports.test = test;
