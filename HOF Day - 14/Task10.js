let products = [
    {name: 'Shirt', price: 30},
    {name: 'Shoes', price: 60},
    {name: 'Hat', price: 25}
]

let index = products.findIndex(product => product.price > 50)

console.log(index)
