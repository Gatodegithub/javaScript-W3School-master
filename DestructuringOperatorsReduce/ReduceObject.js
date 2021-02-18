// Reduce - Objects

// Cart example
const cart = [
  {
    title: 'Samsung Galaxy S7',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'Google Pixel',
    price: 499.99,
    amount: 2,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Xiaomi Redmi Note 5',
    price: 399.99,
    amount: 3,
  },
]

let { totalItems, cartTotal } = cart.reduce((total, cartItem) => {
  const { amount, price } = cartItem;
  // count items
  total.totalItems += amount;
  // count sum
  total.cartTotal += amount * price
  return total;
}, {
  totalItems: 0,
  cartTotal: 0,
})

cartTotal = parseFloat(cartTotal.toFixed(2))

console.log(totalItems, cartTotal);

// Github repos example
const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

// Se hace asyncrono ya que la respuesta demora en llegar.
const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json()

  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    
    if(language){
      // Creo en el objeto que retornare la propiedad language
      total[language] = total[language] + 1 || 1
    }

    return total
  }, {

  })
  console.log(newData);
}
fetchRepos();