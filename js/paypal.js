const selectTag = document
  .querySelectorAll("select")[0]
  .addEventListener("change", function () {
    const elem = document.querySelectorAll("select")[0];
    let gesamtBetrag = elem.value * 22;
    document.querySelector("#gesamtOben").innerHTML = gesamtBetrag + ",00 €";
    document.querySelector("#gesamtUnten").innerHTML = gesamtBetrag + ",00 €";
    document.querySelector(".subtotal").classList.add("visible");
    gesamtPayPal = gesamtBetrag + ".00";
    return gesamtPayPal;
  });

paypal
  .Buttons({
    createOrder: function (data, actions) {
      // This function sets up the details of the transaction, including the amount and line item details.

      let priceFetch = document.querySelector("#gesamtUnten").innerHTML;
      priceFetch = priceFetch.split(",")[0];
      let price = priceFetch + ".00";
      console.log(price);

      return actions.order.create({
        purchase_units: [
          {
            description: "A5 Kalender 2022",
            amount: { currency_code: "EUR", value: price },
          },
        ],
      });
    },
    onApprove: function (data, actions) {
      // This function captures the funds from the transaction.
      return actions.order.capture().then(function (details) {
        // This function shows a transaction success message to your buyer.
        window.location.replace("danke.html");
      });
    },
    style: {
      color: "black",
      shape: "rect",
      label: "paypal",
      height: 40,
    },
  })
  .render("#paypal-button-container");
//This function displays Smart Payment Buttons on your web page.
