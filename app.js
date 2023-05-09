let purchasePrice = document.querySelector("#purchase-price");
let stockQuantity = document.querySelector("#stock-quantity");
let currentPrice= document.querySelector("#current-price");
let submitBtn = document.querySelector("#submit-btn");
let output= document.querySelector("#output");
 
function submitHandler(){

    let pur = Number(purchasePrice.value);
    let qut = Number(stockQuantity.value);
    let curr = Number(currentPrice.value);
    calculateProfitAndLoss(pur,qut,curr)

}


function calculateProfitAndLoss(purchase , quantity, current){
    if (purchase <= 0 || quantity <= 0 || current <= 0) {
        showMessage( "Please enter valid inputs");
    }

    else if(purchase > current)
    {
        let loss = (purchase-current) * quantity;
        let lossPercentage =  (loss / (purchase * quantity)) * 100;
        showMessage(`The loss is  Rs ${loss} and the loss percentage is ${lossPercentage}%`)
        output.style.backgroundColor = 'red';

    }
    else if(current > purchase)
    {
        let profit = (current-purchase)*quantity;
        let profitPercentage =  (profit / (purchase * quantity)) * 100;
        showMessage(`The profit is  Rs ${profit}  and the profit percentage is ${profitPercentage}%`);
        output.style.backgroundColor = 'green';
        output.style.color='white'
    }
    else{
        showMessage("no pain no gain");
    }

}

function showMessage(message) {
    output.innerHTML = message;
}

submitBtn.addEventListener("click",submitHandler);