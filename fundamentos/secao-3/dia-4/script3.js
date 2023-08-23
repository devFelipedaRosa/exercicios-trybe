const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };

  
  const customerInfo = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
    const costumerName = fullOrder.name;
    const phoneNumber = fullOrder.phoneNumber;
    const street = fullOrder.address.street;
    const addressNumber = fullOrder.address.number;
    const apartment = fullOrder.address.apartment;
  
  
    return `Olá, ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${phoneNumber}, ${street}, Número: ${addressNumber}, AP: ${apartment}.`;
  
  }

  console.log(customerInfo(order));
  
  const orderModifier = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva';
    order.payment.total = 50;
    return `Olá ${order.name}, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${order.payment.total},00.`;
    
  }
  
  console.log(orderModifier(order));