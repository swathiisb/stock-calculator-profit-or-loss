let purchasePrice = document.querySelector("#purchase-price");
let stockQuantity = document.querySelector("#stock-quantity");
let currentPrice= document.querySelector("#current-price");
let submitBtn = document.querySelector("#submit-btn");
let output= document.querySelector("#outputs");

function submitHandler(){
    let pur = Number(purchasePrice.value);
    let qut = Number(stockQuantity.value);
    let curr = Number(currentPrice.value);
    calculateProfitAndLoss(pur,qut,curr)

}
function calculateProfitAndLoss(purchase , quantity, current){
    if(purchase>current)
    {
        let loss = (purchase-current) * quantity;
        let lossPercentage = (loss/purchase) * 100
        showOutput(`The loss is ${loss} and the loss percentage is ${lossPercentage} `)

    }
    else if(current>purchase)
    {
        let profit = (current-purchase)*quantity;
        let profitPercentage = (profit/purchase)*100
        showOutput(`The profit is ${profit} and the profit percentage is ${profitPercentage}`);
    }
    else{
        showOutput("no pain no gain");
    }

}
calculateProfitAndLoss(120,10, 100)


function showOutput(message){
    output.innerHTML = message;
}
stockQuantity.addEventListener("click",submitHandler())
