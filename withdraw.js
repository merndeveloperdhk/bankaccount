document.getElementById('btnWithdraw').addEventListener('click', function(){
    const userWithdrawInputField = document.getElementById('user-withdraw-input');
    const newUserInputString = userWithdrawInputField.value; 
    const newUserWithdrawInput = parseFloat(newUserInputString);

    userWithdrawInputField.value = ''; 

    if(isNaN(newUserWithdrawInput)){
        alert("please enter number");
        return;
    }

    const withdrawAdd = document.getElementById('withdraw-add');
    const previousWithdrawString = withdrawAdd.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);


    const balanceTotalAmount = document.getElementById('balance-amount');
    const previousBalanceTotalString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    

    if(newUserWithdrawInput > previousBalanceTotal){
        alert('Bank eto taka nai.');
        return;
    }

    const currentTotalWithdraw = previousWithdraw + newUserWithdrawInput;
    withdrawAdd.innerText = currentTotalWithdraw;

    const newBalaceTotal = previousBalanceTotal - newUserWithdrawInput;
    balanceTotalAmount.innerText = newBalaceTotal;

    


})

var input = document.getElementById("user-withdraw-input"); 
input.addEventListener("keypress", function(event) { 
  if (event.key === "Enter") { 
    event.preventDefault(); 
    const userWithdrawInputField = document.getElementById('user-withdraw-input');
    const newUserInputString = userWithdrawInputField.value; 
    const newUserWithdrawInput = parseFloat(newUserInputString);

    userWithdrawInputField.value = ''; 

    if(isNaN(newUserWithdrawInput)){
        alert("please enter number");
        return;
    }

    const withdrawAdd = document.getElementById('withdraw-add');
    const previousWithdrawString = withdrawAdd.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);


    const balanceTotalAmount = document.getElementById('balance-amount');
    const previousBalanceTotalString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    

    if(newUserWithdrawInput > previousBalanceTotal){
        alert('Bank eto taka nai.');
        return;
    }

    const currentTotalWithdraw = previousWithdraw + newUserWithdrawInput;
    withdrawAdd.innerText = currentTotalWithdraw;

    const newBalaceTotal = previousBalanceTotal - newUserWithdrawInput;
    balanceTotalAmount.innerText = newBalaceTotal;

   
  } 
});