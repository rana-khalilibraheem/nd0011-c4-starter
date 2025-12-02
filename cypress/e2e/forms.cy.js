describe("Forms Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("Should show error when submitting empty Create Set form", () => {
    cy.get("[data-cy='create-set-form']").submit();
    cy.get("[data-cy='error']").should("be.visible");
  });

  it("Should hide error when a set name is entered", () => {
    cy.get("[data-cy='setName']").type("My New Set");
    cy.get("[data-cy='create-set-form']").submit();
    cy.get("[data-cy='error']").should("not.be.visible");
  });
});
