describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("should navigate to About page", () => {
    cy.get("#aboutPage").click({ force: true });
    cy.get("main").should("contain.text", "About Study Night");
  });

  it("should navigate to Home page", () => {
    cy.get("#homePage").click({ force: true });
    cy.get("main").should("contain.text", "Flash Cards Anywhere Anytime");
  });

  it("should navigate to Card Sets page", () => {
    cy.get("#cardSetPage").click({ force: true });
    cy.get("main").should("contain.text", "Your Card Sets");
  });
});
