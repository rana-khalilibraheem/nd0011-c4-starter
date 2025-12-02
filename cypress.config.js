const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:1234", // نفس البورت اللي Parcel يشغّل عليه
    supportFile: false,
  },
});
