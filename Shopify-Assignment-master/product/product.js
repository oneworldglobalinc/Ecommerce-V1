$(document).ready(function () {
  var productId = window.location.href.split("=")[1];
  var currentItem = null;
  $.get(
    "https://5ee248aa8b27f30016094885.mockapi.io/Homepage/" + productId,
    function (response) {
      // $("#name").html(response.name);
      //   console.log(response.name);
      currentItem = response;
      $("#name").html(response.name);
      $("#preview").attr("src", response.preview);
      //   console.log(name);
      $("#brand").html(response.brand);
      $("#price").html(response.price);
      $("#desc-info").html(response.description);

      for (var i = 0; i < response.photos.length; i++) {
        $("#images-section").append(createProduct(response.photos[i], i));
      }
    }
  );

  function createProduct(url, position) {
    var img = document.createElement("img");
    img.src = url;
    // console.log((img.src = url));

    if (position === 0) {
      img.classList.add("active");
    }

    img.addEventListener("click", function () {
      $("#images-section img").removeClass("active");
      img.classList.add("active");
      $("#preview").attr("src", url);
    });

    return img;
  }

  // var preview = document.getElementById("preview");
  // window.addEventListener("scroll", function () {
  //   if (
  //     document.body.scrollTop > 60 ||
  //     document.documentElement.scrollTop > 60
  //   ) {
  //     $("#preview").css("position", "fixed");
  //     $("#preview").css("width", "25%");
  //     // $("#preview").css("margin-top", "0%");
  //     // preview.style.position = "fixed";
  //     // preview.style.width = "25%";
  //   } else {
  //     // $("#preview").css("position", "relative");
  //     $("#preview").css("width", "100%");
  //     // preview.style.position = "relative";
  //     // preview.style.width = "100%";
  //   }
  // });

  // window.addEventListener("scroll", function () {
  //   if (window.screen.availWidth <= 430) {
  //     if (
  //       document.body.scrollTop > 60 ||
  //       document.documentElement.scrollTop > 60
  //     ) {
  //       // $("#preview").css("position", "absolute");
  //       // $("#preview").css("width", "75%");
  //     }
  //   }
  // });

  // $("#btn").click = function () {
  //   $("#btn").addClass("big");
  //   setTimeout(function () {
  //     $("#btn").removeClass("big");
  //   }, 200);

  //   // console.clear();

  //   let cart = window.localStorage.getItem('cart');
  //   // console.log(cart)
  //   cart = cart === null || cart === ''? [] : cart ;
  //   cart = cart.length>0 ? JSON.parse(cart) : [];

  //   console.log(cart)

  //   let positionAt = -1;
  //   for(var i = 0;i<cart.length;i++){
  //     if(parseInt(cart[i].id == parseInt(currentItem.id))){
  //       positionAt = i;
  //       console.log(positionAt = i);
  //     }
  //   }

  // };

  // $("#btn").click = function () {
  //   // $("#btn").addClass("big");
  //   alert("btn clicked");
  //   setTimeout(function () {
  //     $("#btn").removeClass("big");
  //   }, 200);

  //   // console.clear();

  //   let cart = window.localStorage.getItem("cart");
  //   // console.log(cart)
  //   cart = cart === null || cart === "" ? [] : cart;
  //   cart = cart.length > 0 ? JSON.parse(cart) : [];

  //   console.log(cart);

  //   let positionAt = -1;
  //   for (var i = 0; i < cart.length; i++) {
  //     if (parseInt(cart[i].id == parseInt(currentItem.id))) {
  //       positionAt = i;
  //       console.log((positionAt = i));
  //     }
  //   }
  //   if (positionAt > -1) {
  //     cart[positionAt].count += 1;
  //     console.log(cart[positionAt].count);
  //     window.localStorage.setItem("cart", JSON.stringify(cart));
  //   } else {
  //     currentItem.count = 1;
  //     cart.push(currentItem);
  //     window.localStorage.setItem("cart", JSON.stringify(cart));
  //   }

  //   var count = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     count = count + cart[i].count;
  //     console.log(count);
  //   }
  //   $("#cartItems").html(count);
  // };

  // $("#btn").click = function () {
  //   alert("clicked");
  // };

  var btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    // alert("btn clcked");
    btn.classList.add("big");
    setTimeout(function () {
      btn.classList.remove("big");
    }, 200);

    let cart = window.localStorage.getItem("cart");
    //cart === null
    cart = cart === null || cart === "" ? [] : cart;
    cart = cart.length > 1 ? JSON.parse(cart) : [];
    console.log(cart);

    let positionAt = 0;

    for (var i = 0; i < cart.length; i++) {
      if (parseInt(cart[i].id == parseInt(currentItem.id))) {
        positionAt = i;
      }
    }

    if (positionAt > 0) {
      cart[positionAt].count += 1;
      console.log(cart[positionAt].count);
      window.localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      currentItem.count = 1;
      cart.push(currentItem);
      console.log(cart);
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }

    var totalCount = 0;
    for (var i = 0; i < cart.length; i++) {
      totalCount = totalCount + cart[i].id;
    }
    $("cartItems").text(totalCount);
  });
});
