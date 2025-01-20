
# Projeto de Testes Automatizados com Cypress

Este projeto contém testes automatizados utilizando o framework Cypress para validar o fluxo de cadastro no PicPay.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
.gitignore  
cypress/  
  downloads/  
  e2e/  
    login.cy.js  
  fixtures/  
    invalidData.json  
  pages/  
    HomePage.js  
    SignUpPage.js  
  support/  
    commands.js  
    e2e.js  
  utils/  
    generateRegistrationData.js  
videos/  
cypress.config.js  
package.json  
README.md
```

### Detalhamento dos Arquivos e Pastas:

- **`cypress/e2e/login.cy.js`**: Contém os testes de login.
- **`cypress/fixtures/invalidData.json`**: Contém dados inválidos usados nos testes.
- **`cypress/pages/HomePage.js`**: Página de ações relacionadas à Home Page.
- **`cypress/pages/SignUpPage.js`**: Página de ações relacionadas ao cadastro.
- **`cypress/support/commands.js`**: Comandos customizados do Cypress.
- **`cypress/utils/generateRegistrationData.js`**: Função para gerar dados de registro aleatórios.
- **`cypress.config.js`**: Configurações do Cypress.
- **`package.json`**: Lista as dependências do projeto.

## Como Executar este Projeto

### Pré-requisitos

- Node.js (versão 22.13.0 ou superior)
- Cypress (versão 14.0.0 ou superior)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/linkonlou/teste-pratico.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd teste-pratico
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Abra o Cypress Test Runner:**
   Execute o seguinte comando para abrir a interface gráfica do Cypress:
   ```bash
   npx cypress open
   ```

5. **Execute os testes:**
   No Cypress Test Runner, clique no arquivo de teste `login.cy.js` para executar os testes de login.

### Executando os Testes em Modo Headless

Para executar os testes em modo headless (sem interface gráfica), utilize o comando:

```bash
npx cypress run
```

Isso executará todos os testes e gerará relatórios de execução.

## Observações

- Certifique-se de que a versão do Node.js instalada seja compatível com a versão do Cypress utilizada no projeto.
- Para mais informações sobre como utilizar o Cypress, consulte a [documentação oficial do Cypress](https://www.cypress.io/docs/).


## Cenários de Testes Validados

### CT01 - Cadastro com sucesso:
Preenche o formulário com dados válidos.
Verifica se o cadastro foi bem-sucedido exibindo a mensagem de sucesso.

### CT02 - CPF inválido:
Preenche o formulário com um CPF inválido.
Verifica se a mensagem de erro para CPF inválido é exibida.

### CT03 - Nascimento inválido:
Preenche o formulário com uma data de nascimento inválida.
Verifica se a mensagem de erro para data de nascimento inválida é exibida.

### CT04 - Usuário menor de idade:
Preenche o formulário com uma data de nascimento que indica menor de idade.
Verifica se a mensagem de erro para idade menor de 18 anos é exibida.

### CT05 - Usuário com idade superior a 100 anos:
Preenche o formulário com uma data de nascimento que indica idade superior a 100 anos.
Verifica se a mensagem de erro para nascimento inválido é exibida.

### CT06 - Usuário sem termos de aceite:
Preenche o formulário sem aceitar os termos de uso.
Verifica se a mensagem de erro devido à falta de aceite aos termos é exibida.
