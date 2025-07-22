document.getElementById("employeeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const id = document.getElementById("empId").value;
  const name = document.getElementById("empName").value;
  const email = document.getElementById("empEmail").value;
  const location = document.getElementById("empLocation").value;

  const tableBody = document.getElementById("employeeTable").querySelector("tbody");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${location}</td>
  `;

  tableBody.appendChild(row);

  // Clear form
  document.getElementById("employeeForm").reset();
});