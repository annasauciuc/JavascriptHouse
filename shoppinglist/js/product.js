function Product(name, quantity, price, category) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  //console.log(Product);
  this.total = function() {
    return this.quantity * this.price;
  };
}
