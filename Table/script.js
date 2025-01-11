let data = [
  {
    id: 1,
    img: "./img/Без названия (1).jpg",
    Fullname: "Maks Donfort",
    email: "maks88821@gmail.com",
    phoneNum: "+992 919-66-77-41",
    age: 19,
    country: "Dushanbe city",
    status: true,
  },
  {
    id: 2,
    img: "./img/Без названия.png",
    Fullname: "Antonio Banderas",
    email: "antoniok@gmail.com",
    phoneNum: "+5 (446) 351-4741",
    age: 43,
    country: "Spanish",
    status: false,
  },
  {
    id: 3,
    img: "./img/Без названия (1).png",
    Fullname: "Oleg Cheburashkin",
    email: "oleg@gmail.com",
    phoneNum: "+99 (454) 549-3441",
    age: 23,
    country: "Russian",
    status: false,
  },
  {
    id: 4,
    img: "./img/images (1).jpg",
    Fullname: "Lebron James",
    email: "james@gmail.com",
    phoneNum: "+180 (36) 621-9349",
    age: 43,
    country: "Polish",
    status: false,
  },
  {
    id: 5,
    img: "./img/images.jpg",
    Fullname: "Anjelina Joli",
    email: "anjella@gmail.com",
    phoneNum: "+5 (490) 535-4589",
    age: 43,
    country: "USA",
    status: false,
  },
];

let tbody = document.querySelector(".main");

function getData(dates) {
  tbody.innerHTML = "";

  dates.forEach((data, index) => {
    let trContainer = document.createElement("tr"); //add obj in new container

    let tdID = document.createElement("td");
    tdID.innerHTML = index + 1;

    let tdforName = document.createElement("td");

    let divCustom = document.createElement("div");
    divCustom.classList.add("custom");

    let imgProfile = document.createElement("img");
    imgProfile.src = data.img;
    imgProfile.classList.add("photo");

    let divforFulEmail = document.createElement("div");
    divforFulEmail.classList.add("optName");

    let fullname = document.createElement("p");
    fullname.textContent = data.Fullname;

    let Email = document.createElement("p");
    Email.textContent = data.email;

    let tdPhoneNum = document.createElement("td");
    tdPhoneNum.innerHTML = data.phoneNum;

    let tdAge = document.createElement("td");
    tdAge.innerHTML = data.age;

    let tdCountry = document.createElement("td");
    tdCountry.innerHTML = data.country;

    let tdStatus = document.createElement("td");
    tdStatus.innerHTML = data.status ? "Active" : "Disabled";
    tdStatus.classList.add(data.status ? "status" : "statusss");

    let tdfotTools = document.createElement("td");

    let divTools = document.createElement("div");
    divTools.classList.add("tools");

    let toolInfo = document.createElement("img");
    toolInfo.src = "./img/about-svgrepo-com.png";
    toolInfo.classList.add("toolInfo");

    //info
    let viewModal = document.querySelector(".viewModal");
    viewModal.classList.add("viewModal")
    let formati = document.querySelector(".formati");
    formati.classList.add("formati");
   
    toolInfo.onclick = () => {
    viewModal.showModal();

    formati.innerHTML = `
        <img class="photo_info" src="${data.img}">
        <h1>${data.Fullname}</h1>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phoneNum}</p>
        <p>Age: ${data.age}</p>
        <p>Country: ${data.country}</p>
        <p>Status: ${data.status ? "Active" : "Disabled"}</p>
        <button class="searchBut">Exit</button>
        `;

        let exitButton = formati.querySelector(".searchBut");
        exitButton.onclick = () => {
            viewModal.close();
        }
    };

    let toolEdit = document.createElement("img");
    toolEdit.src = "./img/edit-3-svgrepo-com.png";
    toolEdit.classList.add("toolEdit");

    //edit onclick
    toolEdit.onclick = () => {
      editUser(data);
    };

    let toolDel = document.createElement("img");
    toolDel.src = "./img/delete-svgrepo-com.png";
    toolDel.classList.add("toolDel");

    let CheckBox = document.createElement("input");
    CheckBox.classList.add("Checkbox");
    CheckBox.type = "checkbox";
    CheckBox.checked = data.status;

    //chechbox onclisck
    CheckBox.onclick = () => {
      data.status = !data.status;
      tdStatus.innerHTML = data.status ? "Active" : "Disabled";
      if (data.status) {
        tdStatus.classList.add("status");
        tdStatus.classList.remove("statusss");
      } else {
        tdStatus.classList.add("statusss");
        tdStatus.classList.remove("status");
      }
    };

    //Delete tr
    toolDel.onclick = () => {
      deletebyId(data.id);
    };

    divTools.append(toolInfo, toolEdit, toolDel, CheckBox);
    tdfotTools.append(divTools);
    divforFulEmail.append(fullname, Email);
    divCustom.append(imgProfile, divforFulEmail);
    tdforName.append(divCustom);
    trContainer.append(
      tdID,
      tdforName,
      tdPhoneNum,
      tdAge,
      tdCountry,
      tdStatus,
      tdfotTools
    );
    tbody.appendChild(trContainer);
  });
}

getData(data);

//function of delete by id
function deletebyId(id) {
  data = data.filter((data) => data.id !== id);
  getData(data);
}

//edit
let editModal = document.querySelector(".editModal");
let inpImg = document.querySelector(".inpImg");
let inpName = document.querySelector(".inpName");
let inpEmail = document.querySelector(".inpEmail");
let inpPhoneNumber = document.querySelector(".inpPhoneNumber");
let inpAge = document.querySelector(".inpAge");
let inpCountry = document.querySelector(".inpCountry");
let btnSave = document.querySelector(".btnSave");

//edit function
function editUser(user) {
  editModal.showModal();
  inpImg.value = user.img;
  inpName.value = user.Fullname;
  inpEmail.value = user.email;
  inpPhoneNumber.value = user.phoneNum;
  inpAge.value = user.age;
  inpCountry.value = user.country;

  btnSave.onclick = () => {
    user.img = inpImg.value;
    user.Fullname = inpName.value;
    user.email = inpEmail.value;
    user.phoneNum = inpPhoneNumber.value;
    user.age = inpAge.value;
    user.country = inpCountry.value;

    getData(data);
    editModal.close();
  };
}

//add in js
let addTR = document.querySelector(".addTR");
let addModal = document.querySelector(".addModal");
let addImg = document.querySelector(".addImg");
let addName = document.querySelector(".addName");
let addEmail = document.querySelector(".addEmail");
let addPhoneNumber = document.querySelector(".addPhoneNumber");
let addAge = document.querySelector(".addAge");
let addCountry = document.querySelector(".addCountry");
let addButton = document.querySelector(".addButton");

//add
addTR.onclick = () => {
  addModal.showModal();

  addButton.onclick = () => {
    if (
      !addImg.value.trim() ||
      !addName.value.trim() ||
      !addEmail.value.trim() ||
      !addPhoneNumber.value.trim() ||
      !addAge.value.trim() ||
      !addCountry.value.trim()
    ) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    let newTR = {
      id: new Date().getTime(),
      img: addImg.value,
      Fullname: addName.value,
      email: addEmail.value,
      phoneNum: addPhoneNumber.value,
      age: addAge.value,
      country: addCountry.value,
      status: false,
    };

    data.push(newTR);
    getData(data);
    addModal.close();
  };
};

//search
let searchInput = document.querySelector(".searchInput");
let searchButton = document.querySelector(".searchButton");

searchButton.onclick = () => {
  let query = searchInput.value.toLowerCase();
  let filteredData = data.filter(
    (item) =>
      item.Fullname.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query) ||
      item.phoneNum.includes(query) ||
      item.country.toLowerCase().includes(query)
  );

  if (filteredData.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; font-weight: bold; font-size: 30px; color: red;">
          Ничего по вашему поиску не найдено!
        </td>
      </tr>
    `;
  } else {
    getData(filteredData);
  }
  searchInput.value = "";
};