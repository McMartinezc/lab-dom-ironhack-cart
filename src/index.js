// ITERATION 1

function updateSubtotal(product) {
  const price = +product.querySelector('.price span').textContent;
  const quantity = +product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  const total = price * quantity;
  subtotal.textContent = total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  products.forEach(updateSubtotal);   

  // ITERATION 3
  //... your code goes here
  let totalProducts = 0;
  products.forEach(product => {
    const subtotal = parseFloat(product.querySelector('.subtotal span').textContent);
    totalProducts += subtotal;
  });
  const totalValue = document.querySelector('#total-value span')
  totalValue.textContent = totalProducts;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //con el event apunta que boton eliminar es, parentNode lo utilizamos dos veces para ascender en la jerarquia del DOM
  const productRow= target.parentNode.parentNode;
  console.log(productRow);

  productRow.remove();
  //Actualiza precios
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
const productName = document.querySelector("#product-name").value;
const productPrice = parseFloat(document.querySelector("#product-price").value);

// Crea una nueva fila para el producto
const tableBody = document.querySelector('tbody');
const newRow = document.createElement('tr');
newRow.className = 'product';
newRow.innerHTML = `
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${productPrice.toFixed(2)}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Cantidad" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`;

// Agrega la nueva fila al cuerpo de la tabla
tableBody.appendChild(newRow);

// Limpia los campos de entrada
document.querySelector('#product-name').value = '';
document.querySelector('#product-price').value = '0';

// agregamos el boton eliminar
const removeBtn = newRow.querySelector('.btn-remove');
removeBtn.addEventListener('click', removeProduct);

// Recalcula 
calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //Botón eliminar productos
  const btnsRemoves = document.querySelectorAll(".btn-remove");
  btnsRemoves.forEach(button =>{
    button.addEventListener("click", removeProduct);

    //Botón crear productos
    const btnCreate = document.querySelector("#create");
    btnCreate.addEventListener("click", createProduct);
  });
});