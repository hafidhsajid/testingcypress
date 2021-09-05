// satu.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Skenario pertama memilih pilihan pertama", () => {
  beforeEach(() => {
    cy.visit("https://select2.org/data-sources/ajax");
  });

  it("search aja", () => {
    const search = "Hawai";
    cy.get(".select2").click();

    cy.get(".select2-search").type(`${search}`);

    cy.get(".select2-dropdown")
      .children()
      .children()
      .children()
      .should("have.length.above", 3);

    cy.get(
      ".select2-results__option--highlighted > .select2-result-repository"
    ).click();
    cy.pause();
  });
});

describe("Skenario kedua memilih pilihan ke tiga", () => {
  beforeEach(() => {
    cy.visit("https://select2.org/data-sources/ajax");
  });
  it("search", () => {
    const search = "Hawai";
    cy.get(".select2").click();

    cy.get(".select2-search").type(`${search}`);
    cy.get(".select2-dropdown")
      .children()
      .children()
      .children()
      .should("have.length.above", 3);

    cy.get(
      ".select2-results__option--highlighted > .select2-result-repository"
    );
    cy.get(".select2-search").type(`{downarrow}{downarrow}`);
    cy.get(
      ".select2-results__option--highlighted > .select2-result-repository"
    ).click();
    cy.pause();
  });
});

describe("Skenario kedua memilih pilihan ke delapan", () => {
  beforeEach(() => {
    cy.visit("https://select2.org/data-sources/ajax");
  });
  it("search", () => {
    const search = "Hawai";
    cy.get(".select2").click();

    cy.get(".select2-search").type(`${search}`);
    cy.get(".select2-dropdown")
      .children()
      .children()
      .children()
      .should("have.length.above", 3);
    // cy.get(
    //   ".select2-results__option--highlighted > .select2-result-repository"
    // );
    cy.get(".select2-search").type(
      `{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}`
    );
    cy.get(
      ".select2-results__option--highlighted > .select2-result-repository"
    ).click();
    cy.pause();
  });
});

describe("skenario memilih pilihan terakhir", () => {
  beforeEach(() => {
    cy.visit("https://select2.org/data-sources/ajax");
  });
  it("search", () => {
    const search = "Hawai";
    cy.get(".select2").click();

    cy.get(".select2-search").type(`${search}`);
    cy.get(".select2-dropdown")
      .children()
      .children()
      .children()
      .should("have.length.above", 3);

    cy.get(".select2-result-repository").last().click();
  });
});
