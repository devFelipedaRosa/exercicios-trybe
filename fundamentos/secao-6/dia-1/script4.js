const studentRegister = (name, age) => {
    // seu código aqui

    if ( !name || !age ) {
        throw new Error ('Todas as informações são necessárias');
    }
    
    if (age < 18) {
        throw new Error ('Ops, infelizmente nesse momento você não pode fazer as aulas');
    }

    try {
      const register = `${name}, seja bem-vindo(a) à Autrybe!`;
      
      return register;
    } catch (error) {
        return error.message;
        
    }
  };

//   console.log(studentRegister('Felipe', '35' ));