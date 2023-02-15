import { foodItem } from "./fooditem.js";

function displayItems() {
  var appetizers = document.getElementById("appetizers");
  var soup = document.getElementById("soup");
  var salad = document.getElementById("salad");
  var lineup = document.getElementById("lineup");
  var entrees = document.getElementById("entrees");
  var poBoys = document.getElementById("poBoys");
  var burger = document.getElementById("burger");
  var dessert = document.getElementById("dessert");
  var drink = document.getElementById("drink");

  const appetizersData = foodItem.filter(
    (item) => item.category == "appetizers"
  );
  const saladData = foodItem.filter((item) => item.category == "salad");
  const soupData = foodItem.filter((item) => item.category == "soup");
  const lineupData = foodItem.filter((item) => item.category == "lineup");
  const entreesData = foodItem.filter((item) => item.category == "entrees");
  const poBoysData = foodItem.filter((item) => item.category == "poBoys");
  const burgerData = foodItem.filter((item) => item.category == "burger");
  const dessertData = foodItem.filter((item) => item.category == "dessert");
  const drinkData = foodItem.filter((item) => item.category == "drink");
  appetizersData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var check = document.createElement("i");
    check.setAttribute("class", "fa fa-check-circle-o add-to-cart");
    check.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(check);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price : $ " + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    appetizers.appendChild(itemCard);
  });

  saladData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var check = document.createElement("i");
    check.setAttribute("class", "fa fa-check-circle-o add-to-cart");
    check.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(check);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price : $ " + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    salad.appendChild(itemCard);
  });

  soupData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var check = document.createElement("i");
    check.setAttribute("class", "fa fa-check-circle-o add-to-cart");
    check.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(check);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price : $ " + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    soup.appendChild(itemCard);
  });

  lineupData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var check = document.createElement("i");
    check.setAttribute("class", "fa fa-check-circle-o add-to-cart");
    check.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(check);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price : $ " + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    lineup.appendChild(itemCard);
  });

  entreesData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var check = document.createElement("i");
    check.setAttribute("class", "fa fa-check-circle-o add-to-cart");
    check.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(check);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price : $ " + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    entrees.appendChild(itemCard);
  });

  poBoysData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var check = document.createElement("i");
    check.setAttribute("class", "fa fa-check-circle-o add-to-cart");
    check.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(check);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price : $ " + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    poBoys.appendChild(itemCard);
  });

  burgerData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var check = document.createElement("i");
    check.setAttribute("class", "fa fa-check-circle-o add-to-cart");
    check.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(check);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price : $ " + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    burger.appendChild(itemCard);
  });

  dessertData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var check = document.createElement("i");
    check.setAttribute("class", "fa fa-check-circle-o add-to-cart");
    check.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(check);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price : $ " + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    dessert.appendChild(itemCard);
  });

  drinkData.map((item) => {
    var itemCard = document.createElement("div");
    itemCard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");

    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;

    var check = document.createElement("i");
    check.setAttribute("class", "fa fa-check-circle-o add-to-cart");
    check.setAttribute("id", item.id);

    cardTop.appendChild(star);
    cardTop.appendChild(check);

    var img = document.createElement("img");
    img.src = item.img;

    var itemName = document.createElement("p");
    itemName.setAttribute("id", "item-name");
    itemName.innerText = item.name;

    var itemPrice = document.createElement("p");
    itemPrice.setAttribute("id", "item-price");
    itemPrice.innerText = "Price : $ " + item.price;

    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);

    drink.appendChild(itemCard);
  });
}
displayItems();

const vegData = [
  ...new Map(foodItem.map((item) => [item["category"], item])).values(),
];
console.log(vegData);

function selectTaste() {
  var categoryList = document.getElementById("category-list");

  vegData.map((item) => {
    console.log(item);
    var listCard = document.createElement("div");
    listCard.setAttribute("class", "list-card");

    var listImg = document.createElement("img");
    listImg.src = item.img;

    var listName = document.createElement("a");
    listName.setAttribute("class", "list-name");
    listName.innerText = item.category;
    listName.setAttribute("href", "#" + item.category);

    listCard.appendChild(listImg);
    listCard.appendChild(listName);

    var cloneListCard = listCard.cloneNode(true);
    categoryList.appendChild(listCard);
    document.querySelector(".category-header").appendChild(cloneListCard);
  });
}
selectTaste();

document.querySelectorAll(".add-to-cart").forEach((item) => {
  item.addEventListener("click", addToCart);
});

var cartData = [];
function addToCart() {
  var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
  var itemObj = foodItem.find((element) => element.name == itemToAdd);

  var index = cartData.indexOf(itemObj);
  if (index === -1) {
    document.getElementById(itemObj.id).classList.add("toggle-check");
    cartData = [...cartData, itemObj];
  } else if (index > -1) {
    alert("Added to cart!");
  }

  document.getElementById("cart-plus").innerText =
    " " + cartData.length + " Items";
  document.getElementById("m-cart-plus").innerText = " " + cartData.length;
  totalAmount();
  cartItems();
}

function cartItems() {
  var tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  cartData.map((item) => {
    var tableRow = document.createElement("tr");

    var rowData1 = document.createElement("td");
    var img = document.createElement("img");
    img.src = item.img;
    rowData1.appendChild(img);

    var rowData2 = document.createElement("td");
    rowData2.innerText = item.name;

    var rowData3 = document.createElement("td");
    var btn1 = document.createElement("button");
    btn1.setAttribute("class", "decrease-item");
    btn1.innerText = "-";
    var span = document.createElement("span");
    span.innerText = item.quantity;
    var btn2 = document.createElement("button");
    btn2.setAttribute("class", "increase-item");
    btn2.innerText = "+";

    rowData3.appendChild(btn1);
    rowData3.appendChild(span);
    rowData3.appendChild(btn2);

    var rowData4 = document.createElement("td");
    rowData4.innerText = item.price;

    tableRow.appendChild(rowData1);
    tableRow.appendChild(rowData2);
    tableRow.appendChild(rowData3);
    tableRow.appendChild(rowData4);

    tableBody.appendChild(tableRow);
  });
  document.querySelectorAll(".increase-item").forEach((item) => {
    item.addEventListener("click", incrementItem);
  });

  document.querySelectorAll(".decrease-item").forEach((item) => {
    item.addEventListener("click", decrementItem);
  });
}

function incrementItem() {
  let itemToInc = this.parentNode.previousSibling.innerText;
  console.log(itemToInc);
  var incObj = cartData.find((element) => element.name == itemToInc);
  incObj.quantity += 1;

  currPrice =
    (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) /
    (incObj.quantity - 1);
  incObj.price = currPrice * incObj.quantity;
  totalAmount();
  cartItems();
}

var currPrice = 0;
function decrementItem() {
  let itemToInc = this.parentNode.previousSibling.innerText;
  let decObj = cartData.find((element) => element.name == itemToInc);
  let ind = cartData.indexOf(decObj);
  if (decObj.quantity > 1) {
    currPrice =
      (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) /
      decObj.quantity;
    decObj.quantity -= 1;
    decObj.price = currPrice * decObj.quantity;
  } else {
    document.getElementById(decObj.id).classList.remove("toggle-check");
    cartData.splice(ind, 1);
    document.getElementById("cart-plus").innerText =
      " " + cartData.length + " Items";
    document.getElementById("m-cart-plus").innerText = " " + cartData.length;
    if (cartData.length < 1 && flag) {
      document.getElementById("food-items").classList.toggle("food-items");
      document.getElementById("category-list").classList.toggle("food-items");
      document.getElementById("m-cart-plus").classList.toggle("m-cart-toggle");
      document.getElementById("cart-page").classList.toggle("cart-toggle");
      document
        .getElementById("category-header")
        .classList.toggle("toggle-category");
      document.getElementById("checkout").classList.toggle("cart-toggle");
      flag = false;
      alert("Currently no item in cart!");
      console.log(flag);
    }
  }
  totalAmount();
  cartItems();
}

function totalAmount() {
  var sum = 0;
  cartData.map((item) => {
    sum += item.price;
  });
  document.getElementById("total-item").innerText =
    "Total Item : " + cartData.length;
  document.getElementById("total-price").innerText = "Total Price : $ " + sum;
  document.getElementById("m-total-amount").innerText =
    "Total Price : $ " + sum;
}

document.getElementById("cart-plus").addEventListener("click", cartToggle);
document.getElementById("m-cart-plus").addEventListener("click", cartToggle);

var flag = false;
function cartToggle() {
  if (cartData.length > 0) {
    document.getElementById("food-items").classList.toggle("food-items");
    document.getElementById("category-list").classList.toggle("food-items");
    document
      .getElementById("category-header")
      .classList.toggle("toggle-category");
    document.getElementById("m-cart-plus").classList.toggle("m-cart-toggle");
    document.getElementById("cart-page").classList.toggle("cart-toggle");
    document.getElementById("checkout").classList.toggle("cart-toggle");
    flag = true;
    console.log(flag);
  } else {
    alert("Currently no item in cart!");
  }
}

window.onresize = window.onload = function () {
  var size = window.screen.width;
  console.log(size);
  if (size < 800) {
    var cloneFoodItems = document.getElementById("food-items").cloneNode(true);
    var cloneCartPage = document.getElementById("cart-page").cloneNode(true);
    document.getElementById("food-items").remove();
    document.getElementById("cart-page").remove();
    document.getElementById("category-header").after(cloneFoodItems);
    document.getElementById("food-items").after(cloneCartPage);
    addEvents();
  }
  if (size > 800) {
    var cloneFoodItems = document.getElementById("food-items").cloneNode(true);
    document.getElementById("food-items").remove();
    document.getElementById("header").after(cloneFoodItems);

    var cloneCartPage = document.getElementById("cart-page").cloneNode(true);
    document.getElementById("cart-page").remove();
    document.getElementById("food-items").after(cloneCartPage);
    addEvents();
  }
};

function addEvents() {
  document.querySelectorAll(".add-to-cart").forEach((item) => {
    item.addEventListener("click", addToCart);
  });
  document.querySelectorAll(".increase-item").forEach((item) => {
    item.addEventListener("click", incrementItem);
  });

  document.querySelectorAll(".decrease-item").forEach((item) => {
    item.addEventListener("click", decrementItem);
  });
}

document.getElementById("add-address").addEventListener("click", addAddress);

document.getElementById("m-add-address").addEventListener("click", addAddress);

function addAddress() {
  var address = prompt("Enter your address", "");
  if (address) {
    document.getElementById("add-address").innerText = " " + address;
  } else {
    alert("Address not added");
  }
}
