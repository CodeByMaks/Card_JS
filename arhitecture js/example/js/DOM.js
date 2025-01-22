import { deleteUser, postUser, putUser } from "./api.js";

let box = document.querySelector(".box");

//export get
export function get(users) {
  box.innerHTML = "";
  users.forEach((user) => {
    let div = document.createElement("div");
    div.classList.add("user");
    div.innerHTML = `
             <img src="${user.img}">
             <h2>${user.fullname}</h2>
     `;

    //delete exported
    let btnDel = document.createElement("button");
    btnDel.textContent = "Delete";
    btnDel.onclick = () => {
      deleteUser(user.id);
    };

    let btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";

    btnEdit.onclick = () => {
      editUser(user);
    };

    div.append(btnDel, btnEdit);
    box.appendChild(div);
  });
}

//add
let btnAdd = document.querySelector(".btnAdd");
let addModal = document.querySelector(".addModal");
let AddForm = document.querySelector(".AddForm");

btnAdd.onclick = () => {
  addModal.showModal();

  AddForm.onsubmit = (e) => {
    e.preventDefault();
    let newUser = {
      img: AddForm["addImg"].value,
      fullname: AddForm["addName"].value,
    };
    postUser(newUser);
    addModal.close();
    AddForm.reset();
  };
};

//edit
let editModal = document.querySelector(".editModal");
let editForm = document.querySelector(".editForm");

function editUser(user) {
  editModal.showModal();
  editForm["editImg"].value = user.img;
  editForm["editName"].value = user.fullname;

  editForm.onsubmit = (e) => {
    e.preventDefault();
    let newUser = {
      ...user,
      img: editForm["editImg"].value,
      fullname: editForm["editName"].value,
    };
    putUser(newUser);
    editModal.close();
  };
}
