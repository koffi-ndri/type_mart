import products from './products';
const productName : string = products[0].name;

const product = products.filter(product => product.name === productName)[0];

console.log(product);

if (product.preOrder) {
  console.log('We will send you a message when your product is on its way.');
}

let shipping : number;
let taxPercent : number;
let taxTotal : number;
let total : number;

const shippingAddress: string = '575 Broadway, New York City, New York';

if(product.price >= 25){
  shipping = 0;
  console.log(`We provide free shipping for this product.`);
}else{
  shipping = 5;
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
}else{
  taxPercent = 0.05;
}

taxTotal = product.price * taxPercent;
taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
console.log(`${product.name}, ${shippingAddress}, ${product.price}, ${taxTotal}, ${shipping}, ${total}`);