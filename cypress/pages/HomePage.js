class HomePage {
  visit() {
    cy.visit(Cypress.config('baseUrl'));
  }

  acceptCookies() {
    cy.get("#onetrust-accept-btn-handler").click();
  }

  clickSettings() {
    cy.get(".sc-1g2sdvi-14").click();
  }

  clickOpenAccount() {
    cy.get(".sc-2n93ea-1 > .sc-2n93ea-0 > .sc-yej22g-0").click();
  }
}

export default new HomePage();
