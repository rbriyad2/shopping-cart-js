function caseNumberUpdate(isIncrease){
    const inputField = document.getElementById('case-input');
const inputString = inputField.value;
const inputFieldNumber = parseInt(inputString);

if(isIncrease == true){
    newCaseNumber = inputFieldNumber + 1;
    
}
else{
    newCaseNumber = inputFieldNumber - 1;
}
inputField.value = newCaseNumber;
return newCaseNumber;
}


function casePriceUpdate(){
    const casePrice = newCaseNumber *59;
   const oldPriceElement = document.getElementById('case-price');
   oldPriceElement.innerText = casePrice;
}





function updatephoneNumber(isIncrease){
    const inputPhoneField = document.getElementById('phone-input');
const inputPhoneString = inputPhoneField.value;
const inputPhoneNumber = parseInt(inputPhoneString);

if(isIncrease ==true){
    newPhoneNumber = inputPhoneNumber + 1;
}
else{
    newPhoneNumber = inputPhoneNumber - 1;
}


inputPhoneField.value = newPhoneNumber;
return newPhoneNumber;
}


function phonePriceUpdate(){
    const phonePrice = newPhoneNumber * 1219;
    const phonePriceElemet = document.getElementById('phone-price');
    phonePriceElemet.innerText = phonePrice;
    
}

function phonePricElement(elementId){
    const phonePriceElement = document.getElementById(elementId);
const phonePriceString = phonePriceElement.innerText;
const phonePriceTotal = parseInt(phonePriceString);
return phonePriceTotal;

}




function setTextElementValueById(elementId, value){
    const subTotal = document.getElementById(elementId);
subTotal.innerText = value;

}

function calculateSubTotal(){
const phonePriceTotal = phonePricElement('phone-price')
const casePriceTotal =  phonePricElement('case-price')
const subTotalAmount = phonePriceTotal + casePriceTotal;
setTextElementValueById('subTotal', subTotalAmount);




// caslculate tax
const taxamountString = (subTotalAmount * 0.10).toFixed(2);
const taxtamount = parseFloat(taxamountString);
setTextElementValueById('tax', taxtamount);

const finalAmount = subTotalAmount + taxtamount;
setTextElementValueById('totalPay', finalAmount);
}

