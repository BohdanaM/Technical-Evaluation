import { login, testCases } from "../../fixtures/testData.json";

describe("Login and Tasks Verification", () => {
  beforeEach(() => {
    cy.login(login.url, login.email, login.password);
  });

  it("Login and verify tasks with tags", () => {
    testCases.forEach(({ description, page, taskName, column, tags }) => {
      cy.log(`Running ${description}`);

      cy.contains(page).click();
      cy.contains(taskName).parents("div").should("contain", column);

      tags.forEach((tag) => {
        cy.contains(tag).should("be.visible");
      });
    });
  });
});
