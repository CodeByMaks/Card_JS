//logical

//search

search.oninput = () => {
  let value = search.value.trim().toLowerCase();
  let fillterUsers = users.filter((user) =>
    user.fullName.toLocaleLowerCase().includes(value)
  );
  get(fillterUsers);
};
//////////////////////////////////////////////////////////////////

//edit User

let editBut = document.querySelector("#editBut");
let editModal = document.querySelector(".editModal");
editBut.onclick = () => {
  if (userObj != null) {
    editUser(userObj);
    editModal.showModal();
    moreModal.close();
  }
};
let inpImg = document.querySelector(".inpImg");
let inpFullname = document.querySelector(".inpFullname");
let inpEmail = document.querySelector(".inpEmail");
let inpPhone = document.querySelector(".inpPhone");
let saveButs = document.querySelector(".saveButs");
let chooseStatus = document.querySelector(".chooseStatus");
let chooseCity = document.querySelector(".chooseCity");

function editUser(user) {
  console.log(user);
  inpImg.value = user.img;
  inpFullname.value = user.fullName;
  inpEmail.value = user.email;
  inpPhone.value = user.phone;
  chooseStatus.value = user.status;
  chooseCity.value = user.city;
  saveButs.onclick = () => {
    user.img = inpImg.value;
    user.fullName = inpFullname.value;
    user.email = inpEmail.value;
    user.phone = inpPhone.value;
    user.status = chooseStatus.value == "true";
    user.city = chooseCity.value;
    get(users);
    editModal.close();
  };
}
/////////////////////////////////////////////////////////////////////////////

//delteUser
let delteBut = document.querySelector("#deleteBut");

delteBut.onclick = () => {
  if (userId != null) {
    delteUser(userId);
    moreModal.close();
  }
};
function delteUser(id) {
  users = users.filter((user) => user.id != id);
  get(users);
}
///////////////////////////////////////////////////////////////////////////////////////

///show - modal
let showModal = document.querySelector(".showModal")
let showBut = document.querySelector("#showBut")
showBut.onclick = () => {
  if(userObj != null)
  {
    showUser(userObj)
    showModal.showModal()
    moreModal.close()
  }
}
function showUser(user)
{
  showModal.innerHTML = `
  <div class="up">
          <button class="closeBut">X</button>
          <h2>User Info</h2>
        </div>
        <img src="${user.img}" alt="" class="profileImg">
        <h1 class="FullnameM">${user.fullName}</h1>
        <h3 class="emailM">${user.email}</h3>
        <div class="infoUser">
          <div class="information">
            <p class="">City</p>
            <p class="">Status</p>
            <p class="">Phone</p>
          </div>
          <div class="information2">
            <p class="">${user.city}</p>
            <div class="stat">
            <span class="${user.status ? "active" : "Inactive"}">${user.status ? "Active" : "Inactive"}</span>
            </div>
            <p class="">${user.phone}</p>
          </div>
        </div>
  `
  let closeBut = document.querySelector(".closeBut")
  closeBut.onclick = () => {
    showModal.close()
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//add USer
let addModal = document.querySelector(".addModal");
let inpImgA = document.querySelector(".inpImgA");
let inpFullnameA = document.querySelector(".inpFullnameA");
let inpEmailA = document.querySelector(".inpEmailA");
let inpPhoneA = document.querySelector(".inpPhoneA");
let chooseStatusA = document.querySelector(".chooseStatusA");
let chooseCityA = document.querySelector(".chooseCityA");
let saveButA = document.querySelector(".saveButA");

addBut.onclick = () => {
  addModal.showModal();
  saveButA.onclick = () => {
    let newUser = {
      id: new Date().getTime(),
      img: inpImgA.value,
      fullName: inpFullnameA.value,
      email: inpEmailA.value,
      city: chooseCityA.value,
      status: chooseStatusA.value === "true",
      phone: inpPhoneA.value,
    };
    users.push(newUser);
    addModal.close();
    get(users)[(inpEmailA, inpImgA, inpFullnameA, inpPhoneA)].forEach((e) => {
      e.value = "";
    });
  };
};

//////////////////////////////////////////////////////////////////////////

//add-Modal-dialog

/* <dialog class="addModal">
      <div class="flex">
        <input type="text" placeholder="img..." class="inpImgA" />
        <input type="text" placeholder="Fullname..." class="inpFullnameA" />
        <input type="text" placeholder="Email..." class="inpEmailA" />
        <input type="text" placeholder="Phone..." class="inpPhoneA" />

        <div class="divSelect">
          <select name="" id="" class="chooseStatusA">
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
          <select name="" id="" class="chooseCityA">
            <option value="Dushanbe">Dushanbe</option>
            <option value="Hisor">Hisor</option>
            <option value="khujand">Khujand</option>
            <option value="Bokhtar">Bokhtar</option>
          </select>
        </div>
        <button class="saveButA">save</button>
      </div>
    </dialog> */