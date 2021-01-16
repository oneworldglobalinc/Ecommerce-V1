$(document).ready(function () {
  function createCartCheckout(response) {
    {
      /* <div id="items-sec">
                      <div id="image">
                        <img
                          src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
                        />
                      </div>
    
                      <div id="details">
                        <h5>Product name</h5>
                        <p>x</p>
                        <p>Amount</p>
                      </div>
                    </div> */
    }

    let maindiv = document.createElement("div");
    maindiv.classList.add("items-sec");
    var innerFirstDiv = document.createElement("div");
    innerFirstDiv.classList.add("image");
    var img = document.createElement("img");
    img.src = response.preview;
    img.alt = response.name;
    innerFirstDiv.appendChild(img);
    var innerSecondDiv = document.createElement("div");
    innerSecondDiv.classList.add("details");
    var h5 = document.createElement("h4");
    h5.innerText = response.name;
    innerSecondDiv.appendChild(h5);
    var p1 = document.createElement("p");
    p1.innerText = "x" + response.count;
    console.log((p1.innerText = "x" + response.count));
    innerSecondDiv.appendChild(p1);
    var label = document.createElement("span");
    label.innerText = "Amount Rs: ";
    var amount = document.createElement("span");
    //   span.innerText = response.price;
    amount.innerText = parseInt(response.count) * parseInt(response.price);
    var productAmount = document.createElement("p");
    productAmount.appendChild(label);
    productAmount.appendChild(amount);
    // console.log(span);
    // p.appendChild(span);
    innerSecondDiv.appendChild(productAmount);
    maindiv.appendChild(innerFirstDiv);
    maindiv.appendChild(innerSecondDiv);
    //   console.log(maindiv);

    return maindiv;
  }

  var cart = window.localStorage.getItem("cart");
  // console.log(cart);

  cart = cart === "" || cart === null ? [] : cart;
  cart = cart.length > 0 ? JSON.parse(cart) : [];

  console.log(cart);
  var grandTotal = 0;
  var totalAmount = document.getElementById("totalAmount");
  for (let i = 0; i < cart.length; i++) {
    $("#items").append(createCartCheckout(cart[i]));
    //   console.log($("#items").append(createCartCheckout(cart[i])));
    var totalCurrentProducts =
      parseFloat(cart[i].count) * parseFloat(cart[i].price);
    // console.log(totalCurrentProducts);
    grandTotal += totalCurrentProducts;
    // console.log(grandTotal);
    //   $("#totoalAmount").html = grandTotal;
    //   totalAmount.innerHTML = grandTotal;
    // console.log(($("#totoalAmount").html = grandTotal));
  }

  $("#item-count").html(cart.length);
  $("#totalCartAmount").html(grandTotal);

  $("#order-btn").click(function () {
    //   alert("a");
    var orderItemArray = [];

    for (var i = 0; i < cart.length; i++) {
      var obj = {
        id: cart[i].id,
        name: cart[i].name,
        preview: cart[i].preview,
        brand: cart[i].brand,
        isAccessories: cart[i].isAccessory,
        price: cart[i].price,
      };

      console.log(obj);

      orderItemArray.push(obj);
      var finalObj = {
        amount: grandTotal,
        product: obj,
      };

      console.log(finalObj);

      $.post(
        "https://5ee248aa8b27f30016094885.mockapi.io/orderDetails",
        finalObj,
        function () {
          //   alert("order placed Successfully");
          window.localStorage.setItem("cart", []);
          location.assign("../ordersuccess/success.html");
        }
      );
    }
  });
});
