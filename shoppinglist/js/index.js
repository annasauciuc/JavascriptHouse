var product1 = new Product("Tomate", 8, 5, "vegetables");
var product2 = new Product("Cucumber", 2, 5, "vegetables");
var product3 = new Product("Pear", 9, 8, "fruits");
var product4 = new Product("Strawberry", 9, 2, "fruits");
var product5 = new Product("Potatoes", 2, 4, "vegetables");
var product6 = new Product("Apple", 3, 5, "fruits");

var productlist1 = new ShoppingList();
productlist1.addProducts(product1);
productlist1.addProducts(product2);
productlist1.addProducts(product3);
productlist1.addProducts(product4);
productlist1.addProducts(product5);
productlist1.addProducts(product6);
var counter = 0;
function createTable(event) {
  event.preventDefault();
  event.stopPropagation();
  var table = document.getElementById("tableBody");
  table.innerHTML = " ";
  for (i = 0; i < productlist1.products.length; i++) {
    counter = counter + 1;
    var productlist = productlist1.products[i];
    console.log("productlist", productlist);
    var trow = document.createElement("tr");
    trow.id = "divProduct" + counter;
    var td = document.createElement("td");
    td.innerHTML = productlist.name;
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = productlist.quantity + " kg";
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = productlist.price + " $";
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = productlist.category;
    trow.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = productlist.total() + " $";
    trow.appendChild(td);
    var btnRemoveProduct = document.createElement("button");
    btnRemoveProduct.className = " bg-secondary";
    btnRemoveProduct.id = "btnremove" + counter;
    btnRemoveProduct.onclick = function(event) {
      removeProduct(event, trow);
    };
    btnRemoveProduct.textContent = "Delete product" + counter;
    trow.appendChild(btnRemoveProduct);
    table.appendChild(trow);
  }
}
// search
$(document).ready(function() {
  $("#myInput").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $("#tableBody tr").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
});
function addOneProduct(event) {
  //counter = counter + 1;
  event.preventDefault();
  event.stopPropagation();
  var nameProduct = $("#nameProduct").val();
  var quantityProduct = $("#quantityProduct").val();
  var priceProduct = $("#priceProduct").val();
  var categoryProduct = $("#categoryProduct").val();
  console.log("priceProduct", priceProduct);
  var product7 = new Product(
    nameProduct,
    quantityProduct,
    priceProduct,
    categoryProduct
  );
  productlist1.addProducts(product7);
  createTable(event);
}

function removeProduct(event, trow) {
  event.preventDefault();
  event.stopPropagation();

  document.getElementById("tableBody").removeChild(trow);
  console.log("trow", trow);
  // counter = counter + 1;
}
