console.clear();

//header bar effects start
var header = document.getElementById("header");
var headerEffects = document.getElementById("header-effects");
var cartItems = document.getElementById("cartItems");

// window.addEventListener("scroll", function () {
//   if (window.screen.availWidth <= 1024) {
//     header.style.width = "100%";
//     header.style.marginTop = "0%";
//     headerEffects.style.marginTop = "0%";
//     header.style.marginLeft = "0%";
//     // header.classList.add("mover");
//   }
// });

// var mover = document.getElementsByClassName("mover");

// window.addEventListener("scroll", function () {
//   if (window.screen.availWidth > 1024) {
//     if (
//       document.body.scrollTop > 30 ||
//       document.documentElement.scrollTop > 30
//     ) {
//       // header.classList.add("mover");
//       // window.getComputedStyle(header).width = "100%";
//       // header.style.cssText = "width:100%";
//       // let style = getComputedStyle(header, "color:green");
//       // console.log(style);
//       header.classList.add("mover");
//     } else {
//       header.classList.remove("mover");
//       // header.style.cssText = "width:80%";
//     }
//   }
// });

// window.addEventListener("scroll", function () {
//   if (window.screen.availWidth >= 1024) {
//     if (
//       document.body.scrollTop > 30 ||
//       document.documentElement.scrollTop > 30
//     ) {
//       header.classList.add("mover");
//       // header.style.width = "100%";
//       // window.getComputedStyle(header).width = "100%";
//       // header.style.marginLeft = "0px";
//       // window.getComputedStyle(header).marginLeft = "10px";
//       // headerEffects.style.marginTop = "0%";
//       // window.getComputedStyle(headerEffects).marginTop = "0px";
//       // headerEffects.style.marginTop = "0%";
//       cartItems.style.right = "290px";
//     } else {
//       // header.style.width = "80%";
//       // window.getComputedStyle(header).width = "80%";
//       // header.style.marginLeft = "135px";
//       // window.getComputedStyle(header).marginLeft = "135px";
//       // window.getComputedStyle(headerEffects).marginTop = "50px";

//       // headerEffects.style.marginTop = "50px";
//       header.removeChild("mover");
//       cartItems.style.right = "190px";
//       cartItems.style.top = "10px";
//       cartItems.style.paddingLeft = "5px";
//       cartItems.style.paddingRight = "5px";
//     }
//   }
// });

// window.addEventListener("scroll", function () {
//   if (window.screen.availWidth <= 1024) {
//     header.style.width = "100%";
//     header.style.marginTop = "0%";
//     headerEffects.style.marginTop = "0%";
//     header.style.marginLeft = "0%";
//   } else if (window.screen.availWidth >= 1024) {
//     if (
//       document.body.scrollTop > 30 ||
//       document.documentElement.scrollTop > 30
//     ) {
//       header.style.width = "100%";
//       header.style.marginLeft = "0px";
//       // window.getComputedStyle(header).marginLeft = "0%";
//       headerEffects.style.marginTop = "0%";
//       // window.getComputedStyle(headerEffects).marginTop = "0%";
//       headerEffects.style.marginTop = "0%";
//       cartItems.style.right = "290px";
//     } else {
//       header.style.width = "80%";
//       header.style.marginLeft = "135px";
//       // window.getComputedStyle(header).marginLeft = "135px";
//       // window.getComputedStyle(headerEffects).marginTop = "50px";

//       headerEffects.style.marginTop = "50px";

//       cartItems.style.right = "190px";
//       cartItems.style.top = "10px";
//       cartItems.style.paddingLeft = "5px";
//       cartItems.style.paddingRight = "5px";
//     }
//   }

// if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//   header.style.width = "100%";
//   header.style.marginLeft = "0px";
//   // window.getComputedStyle(header).marginLeft = "0%";
//   headerEffects.style.marginTop = "0%";
//   // window.getComputedStyle(headerEffects).marginTop = "0%";
//   headerEffects.style.marginTop = "0%";
//   cartItems.style.right = "290px";
// } else {
//   header.style.width = "80%";
//   header.style.marginLeft = "135px";
//   // window.getComputedStyle(header).marginLeft = "135px";
//   // window.getComputedStyle(headerEffects).marginTop = "50px";

//   headerEffects.style.marginTop = "50px";

//   cartItems.style.right = "190px";
//   cartItems.style.top = "10px";
//   cartItems.style.paddingLeft = "5px";
//   cartItems.style.paddingRight = "5px";
// }
// });

//header bar effects end

//-----------------------home page products start-------------------------

var products = document.getElementById("products");
var clothings = document.getElementById("clothings");
var accessories = document.getElementById("accessories");
const homePageUrl = "https://5ee248aa8b27f30016094885.mockapi.io/Homepage";
var https = new XMLHttpRequest();
https.open("GET", homePageUrl, true);
https.send();

https.onreadystatechange = function () {
  if (https.readyState === 4) {
    var response = JSON.parse(https.responseText);
    // console.log(response);
    for (var i = 0; i < response.length; i++) {
      // products.appendChild(createProductCard(response[i]));
      if (response[i].isAccessory) {
        accessories.appendChild(createProductCard(response[i]));
      } else {
        clothings.appendChild(createProductCard(response[i]));
      }
    }
  }
};

function createProductCard(response) {
  var mainDiv = document.createElement("div");
  mainDiv.classList.add("product");
  mainDiv.id = response.id;
  var a = document.createElement("a");
  a.classList.add("productlink");
  a.href = "product/product.html?pId=" + response.id;
  var img = document.createElement("img");
  img.classList.add("imgcard");
  img.src = response.preview;
  img.alt = response.name;
  var details = document.createElement("div");
  details.classList.add("productDetails");
  var name = document.createElement("h4");
  name.innerText = response.name;
  details.appendChild(name);
  var brandName = document.createElement("h5");
  brandName.innerText = response.brand;
  details.appendChild(brandName);
  var price = document.createElement("p");
  price.innerText = "Rs " + response.price;
  details.appendChild(price);
  a.appendChild(img);
  a.appendChild(details);
  mainDiv.appendChild(a);
  // var logoDiv = document.createElement("div");
  // logoDiv.classList.add("logo");
  // var i = document.createElement("i");
  // i.classList.add("fas", "fa-suitcase", "logo-icon");
  // var span1 = document.createElement("span");
  // span1.classList.add = "logo-text";
  // span1.innerText = "Add To Cart";

  // i.appendChild(span1);

  // mainDiv.appendChild(i);
  console.log(mainDiv);
  return mainDiv;
}

// adding a new feature in home page. Please check
var logoIcon = document.getElementsByClassName("logo-icon");
var logoText = document.querySelectorAll("logo-text");

// logoIcon.addEventListener("click", function () {
//   logoText.style.display = "block";

//   alert("mouse entered");
// });

// logoIcon.onClick = function () {
//   alert("clicked");
// };

// logoIcon.addEventListener("mouseleave", function () {
//   logoText.style.display = "none";
// });

var queryButton = document.getElementById("query-button");
var name = document.getElementById("input-name");
var email = document.getElementById("input-email");
var query = document.getElementById("input-query");
queryButton.addEventListener("click", function () {
  // $.push('')

  name.value = "";
  email.value = "";
  query.value = "";
  // alert("cl");
});
