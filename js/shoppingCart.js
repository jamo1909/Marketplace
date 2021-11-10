var container = document.querySelector(".container");
var pcancel = document.querySelector('.pcancel');
var overlay = document.querySelector('.overlay-contain');
var items = document.querySelectorAll(".products");
var pbtn = document.querySelector(".pbtn");
var dropdown = document.querySelector("select");
var circleItem = document.querySelector(".has-badge");
var shopCart = document.querySelector(".shop-cart");
var cartCont = document.querySelector(".cart-container");
var lily;
var cart = {};
var cartItems = 0;

const products = [
  {id: 1, name: "bitcoin", price: 4500, image: "images/bitcoin.png", description: "Test"},
  {id: 2, name: "ethereum", price: 5500, image: "images/ethereum.png", description: "Test"},
  {id: 3, name: 'dogecoin', price: 3800, image: "images/dogecoin.png", description: "Test"},
  {id: 4, name: 'litecoin', price: 8500, image: "images/litecoin.png", description: "Test"},
  {id: 5, name: 'litecoin', price: 8500, image: "images/litecoin.png", description: "Test"},
  {id: 1, name: "bitcoin", price: 4500, image: "images/bitcoin.png", description: "Test"},
    {id: 2, name: "ethereum", price: 5500, image: "images/ethereum.png", description: "Test"},
    {id: 3, name: 'dogecoin', price: 3800, image: "images/dogecoin.png", description: "Test"},
    {id: 4, name: 'litecoin', price: 8500, image: "images/litecoin.png", description: "Test"},
    {id: 5, name: 'litecoin', price: 8500, image: "images/litecoin.png", description: "Test"},
    {id: 1, name: "bitcoin", price: 4500, image: "images/bitcoin.png", description: "Test"},
      {id: 2, name: "ethereum", price: 5500, image: "images/ethereum.png", description: "Test"},
      {id: 3, name: 'dogecoin', price: 3800, image: "images/dogecoin.png", description: "Test"},
      {id: 4, name: 'litecoin', price: 8500, image: "images/litecoin.png", description: "Test"},
      {id: 5, name: 'litecoin', price: 8500, image: "images/litecoin.png", description: "Test"},
      {id: 1, name: "bitcoin", price: 4500, image: "images/bitcoin.png", description: "Test"},
        {id: 2, name: "ethereum", price: 5500, image: "images/ethereum.png", description: "Test"},
        {id: 3, name: 'dogecoin', price: 3800, image: "images/dogecoin.png", description: "Test"},
        {id: 4, name: 'litecoin', price: 8500, image: "images/litecoin.png", description: "Test"},
        {id: 5, name: 'litecoin', price: 8500, image: "images/litecoin.png", description: "Test"},
  {id: 6, name: 'litecoin', price: 8500, image: "images/litecoin.png", description: "Test"}
];


////this stores the url i'll use later
//var requestURL = 'https://tajlo.github.io/lily-store/products.json';
//// this creates a request
//var request = new XMLHttpRequest();
////open the request
//request.open('GET', requestURL);
////we know we'll get a json object then we need to send/complete the request
//request.responseType = 'json';
//request.send();
//
////this is how we get the info from the json object
//request.onload = function() {
//  lily = request.response;
//  populateStore(lily);
//}
populateStore(products);
function populateStore(products){
//  var products = jsonObj.products;

  for(i = 0; i < products.length; i++){
    var prodCont = document.createElement("div");
    var image = document.createElement("img");
    var name = document.createElement("h3");
    var price = document.createElement("p");
  
   
    prodCont.classList.add("products");
    prodCont.onclick = popup;
    prodCont.dataset.id = products[i]['id'];
    image.src = products[i]['image'];
    name.textContent = products[i]['name'];
    price.textContent = products[i]['price'];
    prodCont.appendChild(image);
    prodCont.appendChild(name);
    prodCont.appendChild(price);
    container.appendChild(prodCont);  
  }
}

function popup(){
  overlay.style.display = "block";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.body.classList.add("noscroll");
  var id = lily.products[this.dataset.id];
  var pimg = document.querySelector(".pimg"); 
  var pname = document.querySelector(".pname");
  var pprice = document.querySelector(".pprice");
  var pdesc = document.querySelector(".pdesc");
  var poptions = document.querySelectorAll("option");
  pimg.src = id['image'];
  pname.textContent = id['name'];
  pprice.textContent = id['price'];
  pdesc.textContent = id['description'];

  
  cart.name = pname.textContent;
  cart.img = pimg.src;
  cart.price = pprice.textContent;
  cart.qty = 1;
  cart.size = dropdown.value;
}

function exit(){
    overlay.style.display = "none";
    document.body.classList.remove("noscroll");
}

items.forEach(item => item.addEventListener("click", popup));

pcancel.addEventListener("click", exit);

pbtn.addEventListener("click", function(){
  cartItems ++;
  circleItem.dataset.count = cartItems;
  cartStr = cartItems.toString();
  localStorage.setItem(cartStr, JSON.stringify(cart));
  
  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
    console.log( localStorage.getItem( localStorage.key( i ) ) );
  }
  
})


//renders localStorage contents in shopping bag 
shopCart.addEventListener("click", function(){
  console.log(cartItems, localStorage[1]);
  cartCont.style.display = "block";
  for(let i = 0; i < localStorage.length; i++){
    var shopContainer = document.createElement("div").classList.add("shop");
    var itemImg = document.createElement("div").classList.add("shop-img");
    var itemInfo = document.createElement("div").classList.add("shop-info-item");
    var itemName = document.createElement("h4");
    var itemQuant = document.createElement("p");
    var shopPrice = document.createElement("div").classList.add("shop-info-price");
    var price = document.createElement("h4");
    var remove = document.createElement("p");
    
    itemImg.style.background = `url(${JSON.parse(localStorage[i].img)})`;
    itemName.textContent = JSON.parse(localStorage[i].name);
    itemQuant.textContent = "qty: " + JSON.parse(localStorage[i].qty);
    price.textContent = JSON.parse(localStorage[i].price);
    remove.textContent = "<i class='fa fa-times'></i>remove";
    
    itemInfo.append(itemName, itemQuant);
    shopPrice.append(price, remove);
    shopContainer.append(itemImg, itemInfo, shopPrice);
    cartCont.appendChild(shopContainer);
  }
})