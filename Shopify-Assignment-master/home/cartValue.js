$(document).ready(function () {
  let cartValue = window.localStorage.getItem("cart");

  cartValue = cartValue === "null" || cartValue === "" ? [] : cartValue;

  cartValue = cartValue.length > 0 ? JSON.parse(cartValue) : [];

  var totalItems = 0;

  for (var i = 0; i < cartValue.length; i++) {
    totalItems += cartValue[i].count;
    $("#cartItems").html(totalItems);
    console.log($("#cartItems").html(totalItems));
  }
});
