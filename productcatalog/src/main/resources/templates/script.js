let products = [];

function addProduct() {
  const name = document.getElementById("name").value.trim();
  const price = document.getElementById("price").value.trim();
  const category = document.getElementById("category").value.trim();

  if (!name || !price || !category) {
    alert("Please fill all fields");
    return;
  }

  products.push({ name, price, category });
  alert("Product added successfully!");

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("category").value = "";
}

function showForm() {
  document.getElementById("formSection").style.display = "block";
  document.getElementById("tableSection").style.display = "none";
}

function showTable() {
  const tableBody = document.getElementById("productTableBody");
  tableBody.innerHTML = "";

  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.category}</td>
    `;
    tableBody.appendChild(row);
  });

  document.getElementById("formSection").style.display = "none";
  document.getElementById("tableSection").style.display = "block";
}