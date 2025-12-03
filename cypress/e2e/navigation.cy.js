/// <reference types="cypress" />

describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("Home navigation works", () => {
    cy.get("[data-cy='nav-home']").click();
    cy.get("[data-cy='main']").should("exist");
  });

  it("About navigation works", () => {
    cy.get("[data-cy='nav-about']").click();
    cy.get("[data-cy='main']").should("exist");
  });

  it("Card Sets navigation works", () => {
    cy.get("[data-cy='nav-cardsets']").click();
    cy.get("[data-cy='main']").should("exist");
  });
});
