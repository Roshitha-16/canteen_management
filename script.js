let total = 0;
let orderItems = [];

function addItem(name, price) {
  orderItems.push({ name, price });
  total += price;

  const orderList = document.getElementById('order-list');
  const item = document.createElement('li');
  item.textContent = `${name} - ₹${price}`;
  orderList.appendChild(item);

  document.getElementById('total').textContent = total;
}

function printReceipt() {
  let receipt = "Receipt:\n\n";
  orderItems.forEach(item => {
    receipt += `${item.name} - ₹${item.price}\n`;
  });
  receipt += `\nTotal: ₹${total}`;

  alert(receipt);
}
let orders = [];

function addItem(name, price) {
  orders.push({ name, price });
  localStorage.setItem("orders", JSON.stringify(orders));
  alert(`${name} added to order! Go to Order page to see summary.`);
}
function addItem(name, price) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  const existingItem = orders.find(item => item.name === name);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    orders.push({ name, price, quantity: 1 });
  }

  localStorage.setItem("orders", JSON.stringify(orders));
  alert(`${name} added to order! Go to Order page to see summary.`);
}
const availableItems = [
  { name: "Idli", price: 20, quantity: 30 },
  { name: "Dosa", price: 40, quantity: 20 },
  { name: "Tea", price: 10, quantity: 50 }
];
localStorage.setItem("canteenItems", JSON.stringify(availableItems));


