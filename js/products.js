const products = [
  {id: 1, title: "bitcoin", price: 4500, picture: "images/bitcoin.png"},
  {id: 2, title: "ethereum", price: 5500, picture: "images/ethereum.png"},
  {id: 3, title: 'dogecoin', price: 3800, picture: "images/dogecoin.png"},
  {id: 4, title: 'litecoin', price: 8500, picture: "images/litecoin.png"},
  {id: 5, title: 'litecoin', price: 8500, picture: "images/litecoin.png"},
  {id: 6, title: 'litecoin', price: 8500, picture: "images/litecoin.png"}
];

const catalog = document.querySelector('#box-container');

products.map(function(product){
  catalog.innerHTML +=
         `<div class="box">
            <img class="img" src="${product.picture}" alt="">
            <h3>${product.title}</h3>
            <div class="price">$${product.price}</div>
            <a href="#" class="btn">add to cart</a>
          </div>`;
});

