const start = selectTag.addEventListener("change", function(){
    let gesamtPayPal
    const selectTag = document.querySelectorAll("select")[0];
    let gesamtBetrag = selectTag.value*20;
    document.querySelector('#gesamtOben').innerHTML = gesamtBetrag + ',00 €';
    document.querySelector('#gesamtUnten').innerHTML = gesamtBetrag + ',00 €';
    document.querySelector('.subtotal').classList.add('visible');
    gesamtPayPal = gesamtBetrag + '.00';
    console.log(gesamtPayPal);
    return gesamtPayPal;
})

let gesamtPayPal = start;

console.log(gesamtPayPal);

paypal.Buttons({
    createOrder: function(data, actions) {
      // This function sets up the details of the transaction, including the amount and line item details.
      return actions.order.create({
        purchase_units: [{
          amount:  {
            value: '20.00'
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      // This function captures the funds from the transaction.
      return actions.order.capture().then(function(details) {
        // This function shows a transaction success message to your buyer.
        alert('Transaction completed by ' + details.payer.name.given_name);
      });
    },
    style: {
                color:  'black',
                shape:  'rect',
                label:  'paypal',
                height: 40,
            }
  }).render('#paypal-button-container');
  //This function displays Smart Payment Buttons on your web page.