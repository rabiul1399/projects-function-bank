
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

function updateBalance(amount,isAdd){

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotalAmount = parseFloat(balanceTotalText);
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

currentBalance('deposit-total',depsiteAmount);

updateBalance(depsiteAmount, true)

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

  currentBalance('withdraw-total',withdrawAmount);

  updateBalance(withdrawAmount,false)

  
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