import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';

// Comando customizado para acessar o site e realizar o fluxo de cadastro
Cypress.Commands.add('openPicPayAccount', () => {
  HomePage.visit();
  HomePage.acceptCookies();
  HomePage.clickSettings();
  HomePage.clickOpenAccount();
});

// Comando customizado para preencher o formulário de cadastro
Cypress.Commands.add('fillSignUpForm', (registrationData) => {
  SignUpPage.fillCpf(registrationData.cpf);
  SignUpPage.fillName(registrationData.fullName);
  SignUpPage.fillEmail(registrationData.email);
  SignUpPage.fillPhone(registrationData.phone);
  SignUpPage.fillBirthday(registrationData.birthDate);
});