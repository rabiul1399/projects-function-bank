
function getInputValue(inpputId){
    const inputField= document.getElementById(inpputId);
    const amountText = inputField.value;
    const amountValue =parseFloat(amountText);

      //clear input field
      inputField.value= '';

    return amountValue;

}

///////////////






function currentBalance(totalFieldId, amount){
   
    const depositeTotal= document.getElementById(totalFieldId);
  
    const totalText = depositeTotal.innerText;
   const previusTotal = parseFloat(totalText)
  
    depositeTotal.innerText = previusTotal + amount ;

}

////////////////////////


function getCurrentBlance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotalAmount = parseFloat(balanceTotalText);

    return previousbalanceTotalAmount;

}
function updateBalance(amount,isAdd){

    const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;
    // const previousbalanceTotalAmount = parseFloat(balanceTotalText);


    const previousbalanceTotalAmount =getCurrentBlance();
   if(isAdd == true){
    balanceTotal.innerText = previousbalanceTotalAmount + amount;
    
   }
   else{
    balanceTotal.innerText = previousbalanceTotalAmount - amount;

   }

   
}
////////////////////////
document.getElementById('deposit-button').addEventListener('click', function (){
//new depsite 

const depsiteAmount = getInputValue('deposit-input');
if(depsiteAmount > 0){
    currentBalance('deposit-total',depsiteAmount);

    updateBalance(depsiteAmount, true)
}


  //get current deposit



//   const depositeTotal= document.getElementById('deposit-total');
  
//   const depositTotalText = depositeTotal.innerText;
//  const previousDepositTotal = parseFloat(depositTotalText)

//   depositeTotal.innerText = previousDepositTotal + depsiteAmount ;



//Update balance
/*
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousbalanceTotalAmount = parseFloat(balanceTotalText);

balanceTotal.innerText = previousbalanceTotalAmount + depsiteAmount;
*/


})

///Next Part Withdraw method

document.getElementById('withdraw-button').addEventListener('click', function (){
   
  const withdrawAmount = getInputValue('withdraw-input');

  const currentBalanceIs = getCurrentBlance();
  if(withdrawAmount > 0 && withdrawAmount < currentBalanceIs){

    currentBalance('withdraw-total',withdrawAmount);

    updateBalance(withdrawAmount,false)
  }
  
  if(withdrawAmount > currentBalanceIs){
    alert('You can not widthdraw more than waht you have in your account');
}


//get update  withdraw balance

/*
const withdrawTotal = document.getElementById('withdraw-total');

const withdrawTotalText = withdrawTotal.innerText;
const withdrawTotalAmount = parseFloat(withdrawTotalText);

withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;
*/



//update balance part

// const balanceTotal = document.getElementById('balance-total');
// const balanceTotalText = balanceTotal.innerText;
// const previousbalanceTotalAmount = parseFloat(balanceTotalText);

// balanceTotal.innerText = previousbalanceTotalAmount - withdrawAmount;

})