document.getElementById('btnDeposit').addEventListener('click', function(){
    const userInputField = document.getElementById('user-deposit-input');
    const newUserInputString = userInputField.value;
    const newUserInput = parseFloat(newUserInputString)
    
    const depositAdd = document.getElementById('diposit-add');
    const previourDepositString = depositAdd.innerText;
    const previourDeposit = parseFloat(previourDepositString)
    depositAdd.innerText = newUserInput;
    const currentDepositTotal = previourDeposit + newUserInput;
    depositAdd.innerText = currentDepositTotal;
    
    const balanceAmount = document.getElementById('balance-amount');
    const previousBalanceTotalString = balanceAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    const currentBalanceTotal = previousBalanceTotal + newUserInput;
    balanceAmount.innerText = currentBalanceTotal;

    userInputField.value = '';
})
var input = document.getElementById("user-deposit-input"); 
input.addEventListener("keypress", function(event) { 
  if (event.key === "Enter") { 
    event.preventDefault(); 
    const userInputField = document.getElementById('user-deposit-input');
    const newUserInputString = userInputField.value;
    const newUserInput = parseFloat(newUserInputString)
    
    const depositAdd = document.getElementById('diposit-add');
    const previourDepositString = depositAdd.innerText;
    const previourDeposit = parseFloat(previourDepositString)
    depositAdd.innerText = newUserInput;
    const currentDepositTotal = previourDeposit + newUserInput;
    depositAdd.innerText = currentDepositTotal;
    const balanceAmount = document.getElementById('balance-amount');
    const previousBalanceTotalString = balanceAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    const currentBalanceTotal = previousBalanceTotal + newUserInput;
    balanceAmount.innerText = currentBalanceTotal;

    userInputField.value = '';
     
  
  } 
});