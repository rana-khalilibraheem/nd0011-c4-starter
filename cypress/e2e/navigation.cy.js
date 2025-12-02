/// <reference types="cypress" />

describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Home navigation works", () => {
    cy.get("[data-cy='nav-home']").click();
  });

  it("About navigation works", () => {
    cy.get("[data-cy='nav-about']").click();
  });

  it("Card Sets navigation works", () => {
    cy.get("[data-cy='nav-cardsets']").click();
  });
});
