let tbody = document.querySelector(".tbody");

export function getTable(arr) {
  arr.forEach((user) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${user.CourseName}</td>
      <td>${user.proffess}</td>
      <td>${user.level}</td>
      <td>${user.continent}</td>
      <td>40340390</td>
      <td>Phabodhan F.</td>
      <td>29 nov 2023</td>
      <td>
        <button class="btnEdit">EDIT</button>
        <button class="btnDelete">DELETE</button>
      </td>
    `;

    tbody.append(tr);
  });
}