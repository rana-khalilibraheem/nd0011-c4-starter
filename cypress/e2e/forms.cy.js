describe("Forms", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  // Create Set Form
  it("Create Set Form - happy path", () => {
    cy.get('form[data-cy="set_form"]').invoke("show");
    cy.get('input[name="setName"]').type("Test Set");
    cy.get('form[data-cy="set_form"] button[type="submit"]').click();
    cy.get('form[data-cy="set_form"] .error').should("not.have.text");
  });

  it("Create Set Form - empty input", () => {
    cy.get('form[data-cy="set_form"]').invoke("show");
    cy.get('form[data-cy="set_form"] button[type="submit"]').click();
    cy.get('form[data-cy="set_form"] .error').should(
      "have.text",
      "Input cannot be empty"
    );
  });

  // Add Card Form
  it("Add Card Form - happy path", () => {
    cy.get('form[data-cy="card_form"]').invoke("show");
    cy.get('input[name="cardQuestion"]').type("Q1");
    cy.get('input[name="cardAnswer"]').type("A1");
    cy.get('form[data-cy="card_form"] button[type="submit"]').click();
    cy.get('form[data-cy="card_form"] .error').should("not.have.text");
  });

  it("Add Card Form - empty input", () => {
    cy.get('form[data-cy="card_form"]').invoke("show");
    cy.get('form[data-cy="card_form"] button[type="submit"]').click();
    cy.get('form[data-cy="card_form"] .error').should(
      "have.text",
      "Input cannot be empty"
    );
  });
});
