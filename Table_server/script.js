const BASIC_URL = "https://6788f7072c874e66b7d70e7e.mockapi.io/user";

//get element
async function GET(query="") {
  try {
    const {data} = await axios.get(`${BASIC_URL}${query}`);
    getUsers(data);
  } catch (error) {
    alert("Error: " + error);
  }
}

//search
let searchForm = document.querySelector(".searchForm");

searchForm.onsubmit = (event) => {
    event.preventDefault();
    const value = searchForm["searching"].value.trim();
    GET(`?fullname=${value}`);
}


GET();

let tbody = document.querySelector(".tbody");

function getUsers(data = []) {
  tbody.innerHTML = "";
  typeof data == "object" && data.length > 0 ?
  data.forEach((user) => {
    const isActive = user.status === true || user.status === "true";
    let tr = document.createElement("tr");
    tr.innerHTML = `
          <td class="idfortTd">${user.id}</td> <!-- Скрытый столбец для id -->
              <td>
                <div class="user">
                  <img src="${user.img}" alt="" />
                  <div>
                    <h4>${user.fullname}</h4>
                    <p>${user.email}</p>
                  </div>  
                </div>  
              </td>  
              <td>${user.city}</td>
              <td><span class="${isActive ? "stata" : "clonStata"}">${
                isActive ? "Active" : "Rejected"
    }</span></td>            
              <td>${user.phoneNum}</td>
              
    `;          

    let menuAcrtion = document.createElement("td");
    let imgClickMenu = document.createElement("img");
    imgClickMenu.src = "./img/Action-Section (1).png";
    imgClickMenu.style.cursor = "pointer";

    menuAcrtion.append(imgClickMenu);
    tr.append(menuAcrtion);
    tbody.append(tr);

    //menu
    let viewModal = document.querySelector(".viewModal");
    let viewProfile = document.querySelector(".viewProfile");
    viewProfile.style.cursor = "pointer"
    let EditProfile = document.querySelector(".EditProfile");
    EditProfile.style.cursor = "pointer";
    let deleteProfile = document.querySelector(".deleteProfile");
    deleteProfile.style.cursor = "pointer";


    imgClickMenu.onclick = () => {
      viewModal.showModal();

      viewProfile.onclick = () => {
        showUserProfile(user.id);
      }
   
      EditProfile.onclick = () => {
        editUser(user);
      }

      deleteProfile.onclick = () => {
        deleteUser(user.id);
        viewModal.close();
      }
    }

  })  
  : (tbody.innerHTML = "NOT FOUND");
}  

//delete 
async function deleteUser(id) {
  try {
    await axios.delete(`${BASIC_URL}/${id}`)
    GET();
  } catch (error) {
    console.error(error);
  }
}


//add
let addModal = document.querySelector(".addModal");
let addForm = document.querySelector(".addForm");
let addNew = document.querySelector(".addNew");
let closeX = document.querySelector(".closeX");
closeX.style.cursor = "pointer";

addNew.onclick = () => {
  addModal.showModal();

  closeX.onclick = () =>{
    addModal.close();
  }

  addForm.onsubmit = (event) => {
      event.preventDefault();
      let newUser = {
        img: addForm["addImage"].value,
        fullname: addForm["addFullname"].value,
        email: addForm["addEmail"].value,
        status: addForm["addStatus"].value === "active",
        city: addForm["addCity"].value,
        phoneNum: addForm["addPhoneNum"].value,
      };
      postUser(newUser);
      addModal.close();
      addForm.reset();
  }
}

async function postUser(user) {
    try {
      await axios.post(BASIC_URL, user);
      GET();
    } catch (error) {
      console.error(error);
    }
}

//edit
let editModal = document.querySelector(".editModal");
let editForm = document.querySelector(".editForm");
let closeY = document.querySelector(".closeY");
closeY.style.cursor = "pointer";

function editUser(user){
  editModal.showModal();
  editForm["editImage"].value = user.img;
  editForm["editFullname"].value = user.fullname;
  editForm["editEmail"].value = user.email;
  editForm["editCity"].value = user.city;
  editForm["editStatus"].value = user.status ? "active" : "rejected";
  editForm["editPhoneNum"].value = user.phoneNum;

  closeY.onclick = () => {
    editModal.close();
  }

  editForm.onsubmit = (event) => {
    event.preventDefault();
    let newUser = {
      ...user,
      img: editForm["editImage"].value,
      fullname: editForm["editFullname"].value,
      email: editForm["editEmail"].value,
      city: editForm["editCity"].value,
      status: editForm["editStatus"].value === "active",
      phoneNum: editForm["editPhoneNum"].value,  
    }
    putUser(newUser);
    editModal.close();
  };
}

async function putUser(user) {
  try {
    await axios.put(`${BASIC_URL}/${user.id}`, user)
    GET();
  } catch (error) {
    console.error(error);
  }
}

//view
async function showUserProfile(userId) {
  try {
    const viewProf = document.querySelector(".viewProf");
    const response = await fetch(`${BASIC_URL}/${userId}`);

    const user = await response.json();

    const imgZoom = viewProf.querySelector(".img_zoom");
    if (imgZoom) {
      imgZoom.src = user.img || "default-image.jpg";
    }

    safeSetTextContent(viewProf, ".profileFullname", user.fullname, "Unknown");
    safeSetTextContent(viewProf, ".profileEmail", user.email, "N/A");
    safeSetTextContent(viewProf, ".profileCity", user.city, "Unknown");
    safeSetTextContent(viewProf, ".profilePhone", user.phoneNum, "N/A");

    const statusElement = viewProf.querySelector(".profileStatus");
    if (statusElement) {
      statusElement.textContent = user.status ? "Active" : "Rejected";
      statusElement.className = user.status ? "stata" : "clonStata";
    }

    viewProf.showModal();

    const closeZ = viewProf.querySelector(".closeZ");
    if (closeZ) {
      closeZ.onclick = () => viewProf.close();
    }
  } catch (error) {
    console.error("Ошибка при получении данных пользователя:", error);
  }
}

function safeSetTextContent(parent, selector, value, defaultValue = "N/A") {
  const element = parent.querySelector(selector);
  if (element) {
    element.textContent = value || defaultValue;
  } else {
    console.warn(`Элемент ${selector} не найден`);
  }
}



//filters
const statusSelect = document.querySelector(".select_active_status");
const citySelect = document.querySelector(".select_active_city");

statusSelect.addEventListener("change", handleSelectionChange);
citySelect.addEventListener("change", handleSelectionChange);

async function handleSelectionChange() {
  try {
    const status = statusSelect.value;
    const city = citySelect.value; 

    const param = [];
    
    if (status !== "all") param.push(`status=${status}`);    
    if (city !== "all") param.push(`city=${city}`);

    const queryString = param.length > 0 ? `?${param.join("&")}` : "";

    const response = await fetch(`${BASIC_URL}${queryString}`);
    const data = await response.json();

    getUsers(data);
  } catch (error) {
    console.error("Error fetching filtered data:", error);
  }
}

//Dark/Light mode
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