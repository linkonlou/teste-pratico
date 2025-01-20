class SignUpPage {
  fillName(name) {
    cy.get('input[name="name"]').type(name);
  }

  fillEmail(email) {
    cy.get('input[name="email"]').type(email);
  }

  fillCpf(cpf) {
    cy.get('input[name="cpf"]').type(cpf);
  }

  fillPhone(phone) {
    cy.get('input[name="phone"]').type(phone);
  }

  fillBirthday(birthday) {
    cy.get('[placeholder="Data de nascimento*"]').type(birthday);
  }

  checkAgremeents(){
    cy.get('[role="checkbox"]').click().should('have.attr', 'aria-checked', 'true');
  }

  submitForm() {
    cy.get('button[type="submit"][form="leads-form"]').click()
  }

}

export default new SignUpPage();
