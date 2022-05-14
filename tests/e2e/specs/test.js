// https://docs.cypress.io/api/table-of-contents

describe("Home Page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get("[data-cy=latestArticleHeader]")
      .invoke("text")
      .should("eq", " Latest articles ");

    cy.get(
      "[data-cy=heres-how-social-connections-make-truecallers-caller-id-smarter]"
    ).click();
    cy.wait(500);
    cy.get("[data-cy=blogTitle]")
      .invoke("text")
      .should(
        "eq",
        "Here’s How Social Connections Make Truecaller’s Caller ID Smarter"
      );
    cy.get("[data-cy=logo]").click();
    cy.wait(500);
    cy.get("[data-cy=latestArticleHeader]")
      .invoke("text")
      .should("eq", " Latest articles ");
  });
});
