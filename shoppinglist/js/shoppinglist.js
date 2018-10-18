function ShoppingList() {
  this.products = [];
  //console.log(this.products);
  this.addProducts = function(product) {
    this.products.push(product);
  };
  this.getVegetables = function() {
    var result = [];
  };
}
var nameProduct = $("#nameProduct").val();
var quantityProduct = $("#quantityProduct").val();
var priceProduct = $("#priceProduct").val();
var categoryProduct = $("#categoryProduct").val();
console.log("priceProduct", priceProduct);
