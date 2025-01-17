let data = [
  {
    id: 1,
    img: "./img/Avatar.png",
    fullname: "Jacob Jones",
    email: "jackson.graham@example.com",
    continent: "Dushanbe",
    status: true,
    phoneNum: "88888 0090",
  },
  {
    id: 2,
    img: "./img/Avatar11.png",
    fullname: "Test name",
    email: "jackson.graham@example.com",
    continent: "Khujand",
    status: false,
    phoneNum: "56548 5390",
  },
];

let tbody = document.querySelector(".tbody");

function get(arr) {
  tbody.innerHTML = "";
  arr.forEach((el, i) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
          <td class="idfortTd">${el.id}</td> <!-- Скрытый столбец для id -->
              <td>
                <div class="user">
                  <img src="${el.img}" alt="" />
                  <div>
                    <h4>${el.fullname}</h4>
                    <p>${el.email}</p>
                  </div>
                </div>
              </td>
              <td>${el.continent}</td>
              <td><span class="${el.status ? "stata" : "clonStata"}">${
      el.status ? "Active" : "Rejected"
    }</span></td>
              <td>${el.phoneNum}</td>
              
    `;
    let menuAcrtion = document.createElement("td");
    let imgClickMenu = document.createElement("img");
    imgClickMenu.src = "./img/Action-Section.png";
    imgClickMenu.style.cursor = "pointer";

    menuAcrtion.append(imgClickMenu);
    tr.append(menuAcrtion);
    tbody.append(tr);

    let idfortTd = document.querySelector(".idfortTd");
    idfortTd.textContent = i + 1;

    let viewModal = document.querySelector(".viewModal");
    let viewProfile = document.querySelector(".viewProfile");
    viewProfile.style.cursor = "pointer";
    let EditProfile = document.querySelector(".EditProfile");
    EditProfile.style.cursor = "pointer";
    let deleteProfile = document.querySelector(".deleteProfile");
    deleteProfile.style.cursor = "pointer";
    let closeY = document.querySelector(".closeY");
    closeY.style.cursor = "pointer";

    let viewProf = document.querySelector(".viewProf")

    //menu
    imgClickMenu.onclick = () => {
      viewModal.showModal();
      //delete
      deleteProfile.onclick = () => {
        deleteUser(el.id);
        viewModal.close();
      };

      //edit
      EditProfile.onclick = () => {
        EditUser(el);
    }

    let profile_style = document.querySelector(".profile_style");
    let closeZ = document.querySelector(".closeZ");
    viewProf.append(profile_style);
    //view
    viewProfile.onclick = () => {
      viewProf.showModal();
  
      profile_style.innerHTML = `
        <div class="states">
          <div class="first-sector">
            <img class="closeZ" src="./img/clear.png" alt="Close">
            <h2>User Info</h2>
          </div>
          <div class="first-sec">
            <img class="img_zoom" src="${el.img}" alt="User Avatar">
            <div class="names">
              <h1>${el.fullname}</h1>
              <p>${el.email}</p>
            </div>
          </div>
          <div class="info">
            <div class="info_sec">
              <div class="change">
              <img src="./img/Lock.png" alt="">
              <p>City</p> 
              </div>
              <p>${el.continent}</p>
            </div>
            <div class="info_sec">
            <div class="change">
             <img src="./img/Timer.png" alt="">
              <p>Status</p>
            </div>
              <p class="${el.status ? "stata" : "clonStata"}">${el.status ? "Active" : "Rejected"}</p>
            </div>
            <div class="info_sec">
            <div class="change">
              <img src="./img/tag.png" alt="">
              <p>Phone</p>
            </div>
              <p>${el.phoneNum}</p>
            </div>
          </div>
        </div>
      `;
    
      let closeZ = document.querySelector(".closeZ");
      closeZ.style.cursor = "pointer";
      closeZ.onclick = () => {
        viewProf.close();
      };
    };
    
    };
  });
}

get(data);

//search
let search = document.querySelector(".searching");

search.oninput = () => {
  let value = search.value.toLowerCase().trim();
  let filterData = data.filter((el) =>
    el.fullname.toLowerCase().includes(value)
  );
  get(filterData);
};

//search activ and city;
let selectStatus = document.querySelector(".select_active_status");
let selectCity = document.querySelector(".select_active_city");

function applyFilters() {
  let statusValue = selectStatus.value;
  let cityValue = selectCity.value;

  let cityMap = {
    ds: "Dushanbe",
    bk: "Bokhtar",
    kh: "Khujand",
  };

  let filterData = data.filter((el) => {
    let matchesStatus =
      statusValue == "all" || el.status === (statusValue == "active");
    let matchesCity =
      cityValue === "all" || el.continent === cityMap[cityValue];
    return matchesStatus && matchesCity;
  });
  get(filterData);
}

selectStatus.onchange = applyFilters;
selectCity.onchange = applyFilters;

// add new persons
let addModal = document.querySelector(".addModal");
let bntAdd = document.querySelector(".addNew");
let addImage = document.querySelector(".addImage");
let addFullname = document.querySelector(".addFullname");
let addEmail = document.querySelector(".addEmail");
let addStatus = document.querySelector(".addStatus");
let addCity = document.querySelector(".addCity");
let addPhoneNum = document.querySelector(".addPhoneNum");
let btnSave = document.querySelector(".btnSave");
let btnCancel = document.querySelector(".btnCancel");
let btnX = document.querySelector(".closeX");

btnX.style.cursor = "pointer";

bntAdd.onclick = () => {
  addModal.showModal();

  btnSave.onclick = () => {
    if (
      !addImage.value ||
      !addFullname.value ||
      !addEmail.value ||
      !addStatus.value ||
      !addCity.value
    ) {
      alert("All fields are required!");
      return;
    }
    let newUser = {
      id: new Date().getTime(),
      img: addImage.value,
      fullname: addFullname.value,
      email: addEmail.value,
      continent: addCity.value,
      status: addStatus.value == "active",
      phoneNum: addPhoneNum.value,
    };
    data.push(newUser);
    get(data);
    addModal.close();

    addImage.value = "";
    addFullname.value = "";
    addEmail.value = "";
    addCity.value = "";
    addStatus.value = "";
    addPhoneNum.value = "";
  };

  btnCancel.onclick = () => {
    addModal.close();
  };

  btnX.onclick = () => {
    addModal.close();
  };
};

//delete
function deleteUser(id) {
  let filterData = data.filter((el) => el.id !== id);
  get(filterData);
}

// edit
let editImage = document.querySelector(".editImage");
let editFullname = document.querySelector(".editFullname");
let editEmail = document.querySelector(".editEmail");
let editCity = document.querySelector(".editCity");
let editStatus = document.querySelector(".editStatus");
let editPhoneNum = document.querySelector(".editPhoneNum");
let editModal = document.querySelector(".editModal");

function EditUser(el) {
  editModal.showModal();
  editImage.value = el.img;
  editFullname.value = el.fullname;
  editEmail.value = el.email;
  editCity.value = el.continent;
  editStatus.value = el.status ? "active" : "rejected";
  editPhoneNum.value = el.phoneNum;

  let buttonSave = document.querySelector(".buttonSave");
  let buttonCancel = document.querySelector(".buttonCancel");
  let closeY = document.querySelector(".closeY");

  buttonSave.onclick = () => {
    el.img = editImage.value;
    el.fullname = editFullname.value;
    el.email = editEmail.value;
    el.continent = editCity.value;
    el.status = editStatus.value === "active";
    el.phoneNum = editPhoneNum.value;
  
    get(data);
    editModal.close();
  };
  
  buttonCancel.onclick = () => {
    editModal.close();
  };
  
  closeY.onclick = () => {
    editModal.close();
  };  
}

let lightBut = document.querySelector(".light_mode");
let darkBut = document.querySelector(".dark_mode");
let body = document.body;

lightBut.onclick = () => {
  body.classList.remove("darkMode");
  body.classList.add("lightMode");
};

darkBut.onclick = () => {
  body.classList.remove("lightMode");
  body.classList.add("darkMode");
};
