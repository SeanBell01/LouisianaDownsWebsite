<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0,viewport-fit=cover"
    />
    <title>Food Website</title>
    <link rel="stylesheet" href="style\style3.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>
  <body>
    <!-- desktop view -->
    <div class="container" id="container">
      <div id="menu">
        <div class="title">
          <img src="/images\Inside-Rail-Logo-03.png" alt="" />
        </div>
        <div class="menu-item">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Your Orders</a>
          <a href="#">Wishlists</a>
          <a href="#">Cart</a>
          <a href="#">Contact</a>
          <a href="#">Checkout</a>
        </div>
      </div>

      <div id="food-container">
        <div id="header">
          <div class="add-box">
            <i class="fa fa-map-marker your-address" id="add-address">
              Your Address</i
            >
          </div>
          <div class="util">
            <i class="fa fa-search"> Search</i>
            <i class="fa fa-tags"> Offers</i>
            <i class="fa fa-cart-plus" id="cart-plus"> 0 Items</i>
          </div>
        </div>
        <div id="food-items" class="d-food-items">
          <div id="appetizers" class="d-appetizers">
            <p id="category-name">Appetizers</p>
          </div>

          <div id="salad" class="d-salad">
            <p id="category-name">Salads</p>
          </div>

          <div id="soup" class="d-soup">
            <p id="category-name">Soup</p>
          </div>

          <div id="lineup" class="d-lineup">
            <p id="category-name">Starting Line-up</p>
          </div>

          <div id="entrees" class="d-entrees">
            <p id="category-name">Entrées</p>
          </div>

          <div id="poBoys" class="d-poBoys">
            <p id="category-name">Po' Boys</p>
          </div>

          <div id="burger" class="m-burger">
            <p id="category-name">Burgers</p>
          </div>

          <div id="dessert" class="m-dessert">
            <p id="category-name">Desserts</p>
          </div>
          <div id="drink" class="m-drink">
            <p id="category-name">Drink</p>
          </div>
        </div>

        <div id="cart-page" class="cart-toggle">
          <p id="cart-title">Cart Items</p>
          <p id="m-total-amount">Total Amout : 100</p>
          <table>
            <thead>
              <td>Item</td>
              <td>Name</td>
              <td>Quantity</td>
              <td>Price</td>
            </thead>
            <tbody id="table-body"></tbody>
          </table>
          <div class="btn-box">
            <button class="cart-btn">Checkout</button>
          </div>
        </div>
      </div>

      <div id="cart">
        <div class="taste-header">
          <div class="user">
            <i class="fa fa-user-circle" id="circle"> Account</i>
          </div>
        </div>
        <div id="category-list">
          <p class="item-menu">Go For Hunt</p>
          <div class="border"></div>
        </div>
        <div id="checkout" class="cart-toggle">
          <p id="total-item">Total Item : 5</p>
          <p id="total-price"></p>
          <p id="delievery">Free delievery on $ 40</p>
          <button class="cart-btn">Checkout</button>
        </div>
      </div>
    </div>

    <!-- mobile view -->
    <div id="mobile-view" class="mobile-view">
      <div class="mobile-top">
        <div class="logo-box">
          <img src="/images\Inside-Rail-Logo-03.png" alt="" id="logo" />
          <i class="fa fa-map-marker your-address" id="m-add-address">
            Your Address</i
          >
        </div>
        <div class="top-menu">
          <i class="fa fa-search"></i>
          <i class="fa fa-tag"></i>
          <i class="fa fa-check-circle-o"></i>
          <i class="fa fa-cart-plus" id="m-cart-plus"> 0</i>
        </div>
      </div>

      <div class="item-container">
        <div class="category-header" id="category-header"></div>

        <div id="food-items" class="food-items">
          <div id="appetizers" class="m-appetizers">
            <p id="category-name">Appetizers</p>
          </div>
          <div id="salad" class="m-salad">
            <p id="category-name">Salads</p>
          </div>
          <div id="soup" class="m-soup">
            <p id="category-name">Soup</p>
          </div>
          <div id="lineup" class="m-lineup">
            <p id="category-name">Starting Line-up</p>
          </div>
          <div id="entrees" class="m-entrees">
            <p id="category-name">Entrées</p>
          </div>
          <div id="poBoys" class="m-poBoys">
            <p id="category-name">Po' Boys</p>
          </div>
          <div id="burger" class="m-burger">
            <p id="category-name">Burgers</p>
          </div>
          <div id="dessert" class="m-dessert">
            <p id="category-name">Desserts</p>
          </div>
          <div id="drink" class="m-drink">
            <p id="category-name">Drink</p>
          </div>
        </div>
      </div>

      <div class="mobile-footer">
        <p>Home</p>
        <p>Cart</p>
        <p>Offers</p>
        <p>Orders</p>
      </div>
    </div>
    <script src="drinkselector.js" type="module"></script>
  </body>
</html>
