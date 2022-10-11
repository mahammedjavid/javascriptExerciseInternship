var toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes']

makePizza = (x) =>{
    str = toppings.toString().replaceAll("," , " and ")
    console.log("A tasty pizza with" , str)
}

makePizza(toppings)