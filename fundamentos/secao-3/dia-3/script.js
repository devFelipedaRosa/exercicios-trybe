const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomer(name) {
  if (typeof name === 'string') {
    trybeBankCustomers.push(name);
    return 'Cliente adiconado com sucesso';
  } else {
    return 'parâmetro passado deve ser do tipo string';
  }
}
console.log(addCustomer('Felipe'));
console.log(addCustomer(25));
console.log(trybeBankCustomers);