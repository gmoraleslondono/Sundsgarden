enum Categories {
  ELECTRONICS = "Electronics",
  GROCERIES = "Groceries",
  CLOTHING = "Clothing",
}

type Product = {
  id: number;
  name: string;
  price: number;
  category: Categories;
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999.99, category: Categories.ELECTRONICS },
  { id: 2, name: "T-Shirt", price: 19.99, category: Categories.CLOTHING },
  { id: 3, name: "Bananas", price: 1.99, category: Categories.GROCERIES },
];

let shoppingCart: Product[] = [];

const addToCart = (product: Product): void => {
  shoppingCart.push(product);
  console.log(`${product.name} has been added to your cart.`);
};

const calculateTotal = (cart: Product[]): string => {
  let total = 0;
  cart.forEach((item) => (total += item.price));
  return total.toFixed(2);
};

const displayCart = (cart: Product[]): void => {
  if (cart.length === 0) {
    console.log("Your cart is empty.");
    return;
  }

  console.log("Your cart contains:");
  cart.forEach((item) => {
    console.log(`- ${item.name} (${item.category}): $${item.price}`);
  });
  console.log(`Total: $${calculateTotal(cart)}`);
};

// Simulate adding products to the cart and displaying it
addToCart(products[0]); // Adding Laptop
addToCart(products[2]); // Adding Bananas
displayCart(shoppingCart);
