const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomer(newCustomers) {
    for (let index = 0; index < newCustomers.length; index+=1) {
        if (typeof newCustomers[index] === 'string') {
            trybeBankCustomers.push(newCustomers[index]);
            return 'Clientes adiconados com sucesso';
        } else {
          return 'Todos os valores precisam ser do tipo string';
        }
        
    }
      
  
}
console.log(addCustomer(['Felipe','Maria']));
console.log(addCustomer([true,25,'Felipe']));
console.log(trybeBankCustomers);