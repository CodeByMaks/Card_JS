let data = [
    {
        id: 1,
        img: "./img/1111.jpg",
        fullname: "Maks Donfort",
        email: "maks@gmail.com",
        prof: "Programmer",
        status: true,
        date: "23/04/18",
    },   
    {
        id: 2,
        img: "./img/1111.jpg",
        fullname: "Test User",
        email: "test@gmail.com",
        prof: "Unknown",
        status: false,
        date: "23/04/18",
    },   
]

let tbody = document.querySelector(".tbody");

function get(arr) {
    tbody.innerHTML = "";
    arr.forEach((el, i) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="idfortTd">${i + 1}</td>
            <td>
                <div class="photoBlog">
                    <img class="photo" src="${el.img}" alt="">
                    <div class="names">
                        <h3>${el.fullname}</h3>
                        <p>${el.email}</p>
                    </div>
                </div>
            </td>
            <td class="tdLeft">${el.prof}</td>
            <td class="tdLeft">
                <span class="${el.status ? "stata" : "clonStata"}">
                    ${el.status ? "ONLINE" : "OFFLINE"}
                </span>
            </td>
            <td class="tdLeft">${el.date}</td>
            <td class="Edit" style="cursor: pointer;">🖋️</td>
            <td class="Delete" style="cursor: pointer;">🗑️</td>
        `;
        tbody.append(tr);

        let edit = tr.querySelector(".Edit");
        let Delete = tr.querySelector(".Delete");

        Delete.onclick = () => {
            deleteFunc(el.id);
        };

        edit.onclick = () => {
            editings(el);
        }
    });
}

get(data);


//delete
function deleteFunc(id) {
    data = data.filter((el) => el.id !== id);
    get(data);
  }

//search
let search = document.querySelector(".search");

search.oninput = () => {
  let value = search.value.toLowerCase().trim();
  let filterData = data.filter((el) =>
    el.fullname.toLowerCase().includes(value)
  );
  get(filterData);
};

//add
let butAdd = document.querySelector(".butAdd");
let AddModal = document.querySelector(".adding");
let inpImg = document.querySelector(".inpImg");
let inpName = document.querySelector(".inpName");
let inpEmail = document.querySelector(".inpEmail");
let inpProf = document.querySelector(".inpProf");
let inpStatus = document.querySelector(".inpStatus");
let inpDate = document.querySelector(".inpDate");
let btnSave = document.querySelector(".btnSave");

butAdd.onclick = () => {
    AddModal.showModal();

    btnSave.onclick = () => {
        if (!inpImg.value || !inpName.value || !inpEmail.value || !inpProf.value || !inpStatus.value || !inpDate.value){
            alert("Заполните все формы");
            return;
            }

        let inputDate = new Date(inpDate.value);
        let formattedDate = `${inputDate.getDate()}/${inputDate.getMonth() + 1}/${inputDate.getFullYear()}`;

        let newUser = {
            id: new Date().getTime(),
            img: inpImg.value,
            fullname: inpName.value,
            email: inpEmail.value,
            prof: inpProf.value,
            status: inpStatus.value == "online",
            date: formattedDate,
        }
        data.push(newUser);
        get(data);
        AddModal.close();
        
        inpImg.value = '';
        inpName.value = '';
        inpEmail.value = '';
        inpProf.value = '';
        inpStatus.value = '';
        formattedDate = ''
    }
}

//editing
let infoEdit = document.querySelector(".infoEdit")
let editImg = document.querySelector(".editImg");
let editName = document.querySelector(".editName");
let editEmail = document.querySelector(".editEmail");
let editProf = document.querySelector(".editProf");
let editStatus = document.querySelector(".editStatus");
let buttonSave = document.querySelector(".buttonSave");
let editDate = document.querySelector(".editDate");

function editings(user){
    infoEdit.showModal();

    editImg.value = user.img;
    editName.value = user.fullname;
    editEmail.value = user.email;
    editProf.value = user.prof;
    editStatus.value = user.status ? "online" : "offline";
    editDate.value = user.date;

    buttonSave.onclick = () => {
        user.img = editImg.value;
        user.fullname = editName.value;
        user.email = editEmail.value;
        user.prof = editProf.value;
        user.status = editStatus.value == "online";
        user.date = editDate.value.replaceAll("-", "/");

        get(data);
        infoEdit.close();
    }
}