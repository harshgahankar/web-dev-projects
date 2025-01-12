const balanceElement = document.getElementById('total-balance');
const transactionList = document.getElementById('transaction-list');
const form = document.getElementById('transaction-form');
let balance = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (description && !isNaN(amount)) {
    const transaction = document.createElement('li');
    transaction.textContent = `${description}: Rs${amount.toFixed(2)}/-`;
    transactionList.appendChild(transaction);
    
    balance += amount;
    balanceElement.textContent = balance.toFixed(2);
    
    form.reset();
  }
});

function clr() {
  balance = 0;
  balanceElement.textContent = "0.00 ";
  transactionList.textContent = " ";
}
