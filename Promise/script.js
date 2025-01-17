let data = [
    {
        id: 1,
        img: "./img/images.jpg",
        model: "Kitchen Set",
        price: 69.99 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        Done: false,
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 2,
        img: "./img/images (5).jpg",
        model: "Entrance cabinet",
        price: 21.98 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        Done: false,
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 3,
        img: "./img/images (4).jpg",
        model: "Locker",
        price: 29.98 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        Done: false,
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 4,
        img: "./img/images (1).jpg",
        model: "Bedroom Bed",
        price: 46.48 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        Done: false,
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 5,
        img: "./img/images (3).jpg",
        model: "Hall Furniture",
        price: 73.08 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        Done: false,
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 6,
        img: "./img/images (2).jpg",
        model: "Entertaiment Center",
        price: 83.68 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        Done: false,
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 7,
        img: "./img/Снимок экрана 2025-01-08 200949.png",
        model: "Sofa Set",
        price: 54.48 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        Done: false,
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 8,
        img: "./img/Снимок экрана 2025-01-08 200814.png",
        model: "Emperor Bed",
        price: 36.78 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        Done: false,
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 9,
        img: "./img/Сним экрана 2025-01-08 224318.png",
        model: "Entertaiment Center",
        price: 53.98 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        Done: false,
        imgAbout: "./img/about-svgrepo-com.png",
    },
]

let box = document.querySelector(".box");


function renderItems(data) {
box.innerHTML = ""; 
data.forEach((data) => {
    let container = document.createElement("div");
    container.classList.add("mebel");

    container.dataset.id = data.id;

    let image = document.createElement("img");
    image.src = data.img;
    image.classList.add("img-mebel");
    image.style.filter = data.Done ? "brightness(50%)" : "brightness(100%)";

    let description = document.createElement("p");
    description.innerHTML = data.model;
    description.classList.add("description")

    let tools = document.createElement("div");
    tools.classList.add("tools");
    
    let Delete = document.createElement("img");
    Delete.src = data.imgDelete;

    let edit = document.createElement("img");
    edit.src = data.imgEdit;

    let price = document.createElement("p");
    price.innerHTML = data.price;

    let Done = document.createElement("input");
    Done.type = "checkbox";
    Done.classList.add("check");
    Done.checked = data.Done;

    let about = document.createElement("img");
    about.src = data.imgAbout;

    let sold = document.createElement("p");
    sold.innerHTML = "Куплено!"
    sold.classList.add("text-sold");
    sold.style.display = data.Done ? "block" : "none";

    let dialModal = document.createElement("dialog");
    dialModal.classList.add("dial");
    let structureDial = document.createElement("div");
    structureDial.classList.add("structure");
    let inName = document.createElement("input");
    inName.placeholder = "Rename...";
    let inPhoto = document.createElement("input");
    inPhoto.placeholder = "Path to photo..."
    let inPrice = document.createElement("input");
    inPrice.type = "number";
    inPrice.placeholder = "New price..."
    let butEdit = document.createElement("button");
    butEdit.innerHTML = "Edit Changes";
    let butExit = document.createElement("button");
    butExit.innerHTML = "Exit";

    let inSearch = document.querySelector(".inSearch");
    let pushSearch = document.querySelector(".pushSearch");

    tools.append(Delete, edit, price, Done, about);
    container.append(image, description, tools, sold);
    box.append(container);

    dialModal.append(structureDial);
    structureDial.append(inPhoto, inName, inPrice, butEdit, butExit)
    document.body.appendChild(dialModal);

    edit.onclick = () => {
        inPhoto.value = data.img;
        inName.value = data.model;
        inPrice.value = data.price;

        dialModal.showModal();

        butEdit.onclick = () => {
            data.img = inPhoto.value;
            data.model = inName.value;
            data.price = inPrice.value + "$";
            
            dialModal.close();
            
            renderItems();
        }

        butExit.onclick = () => {
            dialModal.close();
        }
    }
    //search
    pushSearch.onclick = () => {
        searcheed(inSearch.value);
    }

    //Delete
    Delete.onclick = () => {
        deleteBox(data.id);
    }

    //Check
    Done.onchange = () => {
        data.Done = Done.checked; 
        sold.style.display = Done.checked ? "block" : "none";
        image.style.filter = Done.checked ? "brightness(50%)" : "brightness(100%)";
    };
})
}

function deleteBox(id){
    data = data.filter((data) => data.id !== id)
    renderItems(data);
}

renderItems(data)

function searcheed(model){
   let maks = data.filter((data) => data.model.toLowerCase().includes(model.toLowerCase()));
   renderItems(maks);
}


//-----------------------------------------------------------------
function getItems() {
    return new Promise((resolve, reject) => {
        // Условие, которое проверяет, что данные можно вернуть
        const http = navigator.onLine; // Твоя проверка, например, флаг или запрос

        if (http) {
            resolve(data); // Если условие истинно, возвращаем данные
        } else {
            reject("Ошибка получения данных. Отсутсвует интернет соеденения"); // Если условие ложно, отклоняем промис с ошибкой
        }
    });
}


// Пример функции для добавления нового элемента с использованием промиса
function addItem(newItem) {
    return new Promise((resolve, reject) => {
        if (newItem && newItem.img && newItem.model && newItem.price) {
            newItem.id = data.length + 1; // Генерация нового ID
            data.push(newItem); // Добавление нового элемента в массив data
            resolve("Элемент успешно добавлен!"); // Возвращаем успешное сообщение
        } else {
            reject("Ошибка: Неполные данные для добавления элемента"); // Отправляем сообщение об ошибке
        }
    });
}

// Пример использования функций
let addButton = document.querySelector(".add");
let addModal = document.querySelector(".addModal");
let inpImage = document.querySelector(".inpImage");
let inpModel = document.querySelector(".inpModel");
let inpPrice = document.querySelector(".inpPrice");
let buttSave = document.querySelector(".buttSave");
let buttExit = document.querySelector(".buttExit");

// Открытие модального окна для добавления нового элемента
addButton.addEventListener("click", () => {
    addModal.showModal();
});

buttSave.addEventListener("click", () => {
    const newItem = {
        img: inpImage.value,
        model: inpModel.value,
        price: parseFloat(inpPrice.value).toFixed(2) + " $",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        Done: false,
        imgAbout: "./img/about-svgrepo-com.png",
    };

    addItem(newItem)
        .then((message) => {
            console.log(message); // Выводим сообщение об успешном добавлении
            return getItems(); // Получаем обновлённый массив
        })
        .then((updatedData) => {
            renderItems(updatedData); // Отображаем обновлённые данные
            addModal.close(); // Закрываем модальное окно
            inpImage.value = "";
            inpModel.value = "";
            inpPrice.value = "";
        })
        .catch((error) => {
            console.error(error); // Логируем ошибку
            alert(error); // Показываем сообщение об ошибке
        });
});


// Закрытие модального окна без сохранения
buttExit.addEventListener("click", () => {
    addModal.close();
});

// Первоначальное отображение данных
getItems()
    .then((initialData) => {
        renderItems(initialData); // Отображаем данные только при успешном выполнении
    })
    .catch((error) => {
        console.error(error); // Логируем ошибку
        alert(error); // Информируем пользователя
        renderItems([]); // Очищаем экран (не показываем данные)
    });
