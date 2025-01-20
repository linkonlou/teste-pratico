import fakerBr from 'faker-br';

export function generateRegistrationData() {
  const fullName = fakerBr.name.findName();
  const email = fakerBr.internet.email();
  const cpf = fakerBr.br.cpf({ format: false });
  const phone = fakerBr.phone.phoneNumber('(11) 991##-####');
  const birthDate = '0101199' + String(fakerBr.random.number({ min: 0, max: 9 }));

  return { fullName, email, cpf, phone, birthDate };
}
