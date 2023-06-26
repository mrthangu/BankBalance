let balance = 0;

function depositamount() {
  let depositinput = document.getElementById('deposit');
  let amount = parseFloat(depositinput.value);
  balance += amount;
  depositinput.value = '';
  alert('Amount deposited successfully!');
}

function withdrawamount() {
  let withdrawinput = document.getElementById('withdraw');
  let amount = parseFloat(withdrawinput.value);
  if (amount <= balance) {
    balance -= amount;
    withdrawinput.value = '';
    alert('Amount withdrawn successfully!');
  } else {
    alert('Insufficient balance!');
  }
}

function showBalance() {
  alert('Your current balance is: ' + balance);
}