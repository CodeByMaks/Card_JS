let applicants = JSON.parse(localStorage.getItem("applicants")) || [];
let tbody = document.querySelector(".tbody");
let paginationContainer = document.querySelector(".pagination");

let currentPage = 1;
let usersPerPage = 5;
let filteredApplicants = [...applicants]; // Теперь пагинация работает и с поиском

function displayUsers() {
    tbody.innerHTML = "";
    let startIndex = (currentPage - 1) * usersPerPage;
    let endIndex = startIndex + usersPerPage;
    let usersToShow = filteredApplicants.slice(startIndex, endIndex); // Используем отфильтрованные данные

    usersToShow.forEach((user) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <div class="structure"> 
                    <img class="img-table" src="${user.img}" alt="User Image">
                    <span>${user.fullname}</span>
                </div>
            </td>
            <td><p>${user.email}</p></td>
            <td><p>${user.location}</p></td>
            <td><p>${user.phone}</p></td>
            <td><p>${user.category}</p></td>
        `;
        tbody.append(tr);
    });

    updatePagination();
}

function updatePagination() {
    paginationContainer.innerHTML = ""; 

    let totalPages = Math.ceil(filteredApplicants.length / usersPerPage); // Считаем по отфильтрованным

    let prevButton = document.createElement("button");
    prevButton.textContent = "<";
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            displayUsers();
        }
    };
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        let pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.classList.add("page-btn");
        if (i === currentPage) {
            pageButton.classList.add("active");
        }
        pageButton.onclick = () => {
            currentPage = i;
            displayUsers();
        };
        paginationContainer.appendChild(pageButton);
    }

    let nextButton = document.createElement("button");
    nextButton.textContent = ">";
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayUsers();
        }
    };
    paginationContainer.appendChild(nextButton);
}

displayUsers();

// Поиск пользователей
let searchForm = document.querySelector(".searchForm");
let searchInput = document.querySelector("input[name='searchElement']");

searchForm.onsubmit = (e) => {
    e.preventDefault();
    filterUsers();
};

function filterUsers() {
    let searchQuery = searchInput.value.trim().toLowerCase();

    filteredApplicants = searchQuery
        ? applicants.filter(user =>
            user.fullname.toLowerCase().includes(searchQuery) ||
            user.email.toLowerCase().includes(searchQuery)
        )
        : [...applicants]; // Если поле пустое, показываем всех

    currentPage = 1;
    displayUsers();
}

searchInput.addEventListener("input", filterUsers);
