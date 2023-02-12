document.getElementById('btnWithdraw').addEventListener('click', function(){
    const userWithdrawInputField = document.getElementById('user-withdraw-input');
    const newUserInputString = userWithdrawInputField.value; 
    const newUserWithdrawInput = parseFloat(newUserInputString);

    const withdrawAdd = document.getElementById('withdraw-add');
    const previousWithdrawString = withdrawAdd.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    const currentTotalWithdraw = previousWithdraw + newUserWithdrawInput;

    withdrawAdd.innerText = currentTotalWithdraw;

    const balanceTotalAmount = document.getElementById('balance-amount');
    const previousBalanceTotalString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalaceTotal = previousBalanceTotal - newUserWithdrawInput;
    balanceTotalAmount.innerText = newBalaceTotal;

    userWithdrawInputField.value = '';


})

var input = document.getElementById("user-withdraw-input"); 
input.addEventListener("keypress", function(event) { 
  if (event.key === "Enter") { 
    event.preventDefault(); 
    const userWithdrawInputField = document.getElementById('user-withdraw-input');
    const newUserInputString = userWithdrawInputField.value; 
    const newUserWithdrawInput = parseFloat(newUserInputString);

    const withdrawAdd = document.getElementById('withdraw-add');
    const previousWithdrawString = withdrawAdd.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    const currentTotalWithdraw = previousWithdraw + newUserWithdrawInput;

    withdrawAdd.innerText = currentTotalWithdraw;

    const balanceTotalAmount = document.getElementById('balance-amount');
    const previousBalanceTotalString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalaceTotal = previousBalanceTotal - newUserWithdrawInput;
    balanceTotalAmount.innerText = newBalaceTotal;

    userWithdrawInputField.value = '';
     
  
  } 
});