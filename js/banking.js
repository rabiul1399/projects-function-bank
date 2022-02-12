
// function doubletIt(num){
//     const result = num * 2;
//     return result;
// }

// const first = doubletIt(5);
// const second =doubletIt(7);

function getInputValue(){
    const DepositeInput= document.getElementById('deposit-input');
    const depositAmountText = DepositeInput.value;
    const depsiteAmount =parseFloat(depositAmountText);

      //clear input field
      DepositeInput.value= '';

    return depsiteAmount;


}




////////////////////////
document.getElementById('deposit-button').addEventListener('click', function (){
//new depsite 

//    const DepositeInput= document.getElementById('deposit-input');
//     const depositAmountText = DepositeInput.value;
//     const depsiteAmount =parseFloat(depositAmountText);

const depsiteAmount = getInputValue();

  //get current deposit
  const depositeTotal= document.getElementById('deposit-total');
  
  const depositTotalText = depositeTotal.innerText;
 const previousDepositTotal = parseFloat(depositTotalText)

  depositeTotal.innerText = previousDepositTotal + depsiteAmount ;

//Update balance
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousbalanceTotalAmount = parseFloat(balanceTotalText);

balanceTotal.innerText = previousbalanceTotalAmount + depsiteAmount;


})

///Next Part Withdraw method

document.getElementById('withdraw-button').addEventListener('click', function (){
   
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
     
    const withdrawAmount = parseFloat(withdrawInputText);

//get withdraw balance
const withdrawTotal = document.getElementById('withdraw-total');
const withdrawTotalText = withdrawTotal.innerText;
const withdrawTotalAmount = parseFloat(withdrawTotalText);

withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;

//update balance part

const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousbalanceTotalAmount = parseFloat(balanceTotalText);

balanceTotal.innerText = previousbalanceTotalAmount - withdrawAmount;

//clear the input field
withdrawInput.value = '';
})