












document.getElementById('caseplusbutton').addEventListener('click', function(){
    const newCaseNumber = caseNumberUpdate(true);
    casePriceUpdate(newCaseNumber);
    calculateSubTotal();
   
 });
 


document.getElementById('phone-plus-btn').addEventListener('click', function(){
    const newPhonePrice =  updatephoneNumber(true);
    phonePriceUpdate(newPhonePrice);
    calculateSubTotal();



    // setTextElementValueById('subTotal', totalPriceNow);
    // const taxtAmountNoFixed = totalPriceNow * 0.1;
    // const taxtAmount = taxtAmountNoFixed.toFixed(2);
    // setTextElementValueById('tax', taxtAmount);
    
    // document.getElementById('totalPay');
    // setTextElementValueById('totalPay', finalTotal);


});





