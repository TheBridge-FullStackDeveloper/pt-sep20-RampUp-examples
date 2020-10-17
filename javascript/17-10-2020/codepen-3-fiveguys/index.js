function handleSubmit(event) {
  event.preventDefault(); // Ya no se recarga la página!! 🎉

  // Aquí están todos los inputs de mi form
  const formElements = event.target.elements;

  const clientName = formElements['client-name'].value;
  const burguerType = formElements['burguer-type'].value;
  const breadType = formElements['bread-type'].value;

  // Toppings
  const toppingBacon = formElements['topping-bacon'];
  const toppingCheese = formElements['topping-cheese'];
  const toppingLettuce = formElements['topping-lettuce'];
  const toppingAvocado = formElements['topping-avocado'];

  const allToppings = [
    toppingBacon,
    toppingCheese,
    toppingLettuce,
    toppingAvocado,
  ];
  const toppings = [];

  for (let i = 0; i < allToppings.length; i++) {
    if (allToppings[i].checked) {
      toppings.push(allToppings[i].value);
    }
  }

  // Creamos un paquete final de información para enviar
  const order = {
    clientName: clientName,
    burguerType: burguerType,
    breadType: breadType,
    toppings: toppings,
  };
  // Suponemos que mandamos el pedido a la DB
  console.log(order);
}
const burguerMenu = document.querySelector('#burguer-menu');
burguerMenu.addEventListener('submit', handleSubmit);
