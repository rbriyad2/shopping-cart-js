document.getElementById('caseminusbutton').addEventListener('click', function(){
    const newCaseNumber = caseNumberUpdate(false);
    casePriceUpdate(newCaseNumber);
    calculateSubTotal();
});

document.getElementById('phone-minus-btn').addEventListener('click', function(){
    const newPhonePrice=  updatephoneNumber(false)
      phonePriceUpdate(newPhonePrice)
      calculateSubTotal();
      });