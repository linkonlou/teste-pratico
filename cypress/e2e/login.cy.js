/// <reference types="cypress" />
import SignUpPage from "../pages/SignUpPage.js";
import { generateRegistrationData } from "../utils/generateRegistrationData.js";

describe("Automação de Cadastro no PicPay", () => {
  let registrationData;
  let invalidData;

  beforeEach(() => {
    // Gera dados aleatórios uma vez por teste
    registrationData = generateRegistrationData();
    cy.openPicPayAccount();

    // Carrega os dados inválidos da fixture
    cy.fixture("invalidData").then((data) => {
      invalidData = data;
    });
  });

  it("CT01 - Cadastro com sucesso", () => {
    // Preenche o formulário com dados válidos
    cy.fillSignUpForm(registrationData);

    SignUpPage.checkAgremeents();
    SignUpPage.submitForm();

    // Verifica se o cadastro foi bem-sucedido
    cy.contains(
      "Aponte o celular para o QRCode para baixar o App PicPay e finalize a abertura da sua conta."
    ).should("be.visible");
  });

  it("CT02 - CPF invalido", () => {
    // Preenche o formulário com CPF inválido da fixture
    cy.fillSignUpForm({ ...registrationData, cpf: invalidData.invalidCpf });

    SignUpPage.checkAgremeents();
    SignUpPage.submitForm();

    // Verifica se a mensagem de erro para CPF inválido é exibida
    cy.contains("CPF inválido").should("be.visible");
  });

  it("CT03 - Nascimento invalido", () => {
    // Preenche o formulário com nascimento inválido da fixture
    cy.fillSignUpForm({
      ...registrationData,
      birthDate: invalidData.invalidBirthDate,
    });

    // Verifica se a mensagem de erro para Nascimento invalido é exibida
    cy.contains("Data de nascimento inválida").should("be.visible");
  });

  it("CT04 - Usuário menor de idade", () => {
    // Preenche o formulário com nascimento menor de idade da fixture
    cy.fillSignUpForm({
      ...registrationData,
      birthDate: invalidData.minorBirthDate,
    });

    // Verifica se a mensagem de erro para idade menor de 18 anos é exibida
    cy.contains("Você deve ter pelo menos 18 anos").should("be.visible");
  });

  it("CT05 - Usuário com idade superior a 100 anos", () => {
    // Preenche o formulário com idade superior a 100 anos
    cy.fillSignUpForm({
      ...registrationData,
      birthDate: invalidData.olderThan100BirthDate,
    });

    // Verifica se a mensagem de erro para nascimento inválido é exibida
    cy.contains("Data de nascimento inválida").should("be.visible");
  });

  it("CT06 - Usuário sem termos de aceite", () => {
    // Preenche o formulário sem aceitar os termos
    cy.fillSignUpForm(registrationData);

    // Não chama SignUpPage.checkAgremeents() para simular a falta de aceitação dos termos

    SignUpPage.submitForm();

    // Verifica se a mensagem de erro devido à falta de aceite aos termos é exibida
    cy.contains(
      "Para enviar, você precisa concordar com a Política de Privacidade."
    ).should("be.visible");
  });
});
