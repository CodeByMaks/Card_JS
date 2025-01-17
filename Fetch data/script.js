//api
const BASIC_URL = "https://6788f7072c874e66b7d70e7e.mockapi.io/user";
//main
const left_box = document.querySelector(".left_box");
//edit
const editModal = document.querySelector(".editModal");
const editName = document.querySelector(".editName");
const editEmail = document.querySelector(".editEmail");
const editPhone = document.querySelector(".editPhone");
const btnSave = document.querySelector(".btnSave");
//add
const addSave = document.querySelector(".addSave");
const AeditModal = document.querySelector(".AeditModal");
const AeditName = document.querySelector(".AeditName");
const AeditEmail = document.querySelector(".AeditEmail");
const AeditPhone = document.querySelector(".AeditPhone");
const AbtnSave = document.querySelector(".AbtnSave");


let idObj = null;

//GET
async function GET() {
    try {
        const responsive = await fetch(BASIC_URL);

        let data = await responsive.json();
        getData(data);

    } catch (error) {
        alert("Ошибка при получении данных: " + error);
    }
}

//DELETE
async function deleteUser(id) {
    try {
        await fetch(`${BASIC_URL}/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
        });
        GET();
    } catch (error) {
        alert("Ошибка при удалении данных: " + error)
    }
}

//PUT
async function editUsers(users) {
    try {
        await fetch(`${BASIC_URL}/${idObj}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify(users),
        });
        editModal.close();
        GET();
    } catch (error) {
        alert("Ошибка при изменении данных: " + error)
    }
}

//edit synchron
function fillInputs(el) {
    editModal.showModal();
    editName.value = el.name;
    editEmail.value = el.email;
    editPhone.value = el.phone;
    idObj = el.id;

    btnSave.onclick = () => {
        const updatedUser = {
            name: editName.value,
            email: editEmail.value,
            phone: editPhone.value,
        };
        editUsers(updatedUser);
    };
}

//POST
async function addUsers() {
    let newUser = {
        name: AeditName.value,
        email: AeditEmail.value,
        phone: AeditPhone.value,
    };
    try {
        await fetch(`${BASIC_URL}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify(newUser),
        });
        AeditModal.close();
        GET();
    } catch (error) {
        alert("Ошибка при добавлении данных: " + error)
    }
}

//add synchron
addSave.onclick = () => {
    AeditModal.showModal();
}
AbtnSave.onclick = () => {
    if (!AeditName.value || !AeditEmail.value || !AeditPhone.value){
        alert("Type full info in inputs!");
        return;
    }
      addUsers();
}


//getDate для всех данных
function getData(data){
    left_box.innerHTML = "";
    data.forEach((el) => {
        let box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
             <div class="obraz">
                <p>Name: </p>
                <p>${el.name}</p>
            </div>
            <div class="obraz">
                <p>Email: </p>
                <p>${el.email}</p>
            </div>
            <div class="obraz">
                <p>Phone: </p>
                <p>${el.phone}</p>
            </div>
             <div class="obraz">
                <p>
                    <span class="edit-icon">🖋️</span>
                    <span class="delete-icon">🗑️</span>
                </p>
             </div>
        `
        const editIcon = box.querySelector(".edit-icon");
        const deleteIcon = box.querySelector(".delete-icon");

        editIcon.onclick = () => fillInputs(el);
        deleteIcon.onclick = () => deleteUser(el.id);
        
        left_box.appendChild(box);
    })
}

GET();