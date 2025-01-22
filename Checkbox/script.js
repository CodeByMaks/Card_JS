const userTable = document.getElementById("userTable");
const deleteButton = document.getElementById("deleteButton");

// Mock API URL (replace with your actual endpoint)
const API_URL = "https://6788f7072c874e66b7d70e7e.mockapi.io/user";

// Fetch and display users
async function fetchUsers() {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();

        userTable.innerHTML = users.map(user => `
                <tr>
                    <td><input type="checkbox" data-id="${user.id}" class="user-checkbox"></td>
                    <td>${user.id}</td>
                    <td>${user.fullname}</td>
                    <td>${user.email}</td>
                </tr>
            `)
            .join("");
        
        attachCheckboxListeners();
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Attach event listeners to checkboxes
function attachCheckboxListeners() {
    const checkboxes = document.querySelectorAll(".user-checkbox");
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            // Enable/disable delete button based on selection
            const anyChecked = [...checkboxes].some(cb => cb.checked);
            deleteButton.disabled = !anyChecked;
        });
    });
}

// Delete selected users
async function deleteSelectedUsers() {
    try {
        const selectedIds = [...document.querySelectorAll(".user-checkbox:checked")]
            .map(cb => cb.dataset.id);

        for (const id of selectedIds) {
            const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        }

        // Remove deleted users from the table
        selectedIds.forEach(id => {
            const row = document.querySelector(`.user-checkbox[data-id="${id}"]`).parentElement.parentElement;
            row.remove();
        });

        deleteButton.disabled = true; // Disable button after deletion
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Event listener for delete button
deleteButton.addEventListener("click", deleteSelectedUsers);

// Fetch users on page load
fetchUsers();
