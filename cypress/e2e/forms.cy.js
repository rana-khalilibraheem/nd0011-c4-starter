/// <reference types="cypress" />

describe("Forms Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("Should show error when submitting empty Create Set form", () => {
    cy.get("[data-cy='create-set-form']").should("exist");
    cy.get("[data-cy='create-btn']").click();
    cy.get("[data-cy='error']")
      .should("be.visible")
      .and("contain", "Set name is required");
  });
});
