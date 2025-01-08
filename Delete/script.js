let data = [
    {
        id: 1,
        img: "./img/images.jpg",
        model: "Kitchen Set",
        price: 69.99 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        imgDone: "./img/done-1476-svgrepo-com.png",
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 2,
        img: "./img/images (5).jpg",
        model: "Entrance cabinet",
        price: 21.98 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        imgDone: "./img/done-1476-svgrepo-com.png",
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 3,
        img: "./img/images (4).jpg",
        model: "Locker",
        price: 29.98 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        imgDone: "./img/done-1476-svgrepo-com.png",
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 4,
        img: "./img/images (1).jpg",
        model: "Bedroom Bed",
        price: 46.48 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        imgDone: "./img/done-1476-svgrepo-com.png",
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 5,
        img: "./img/images (3).jpg",
        model: "Hall Furniture",
        price: 73.08 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        imgDone: "./img/done-1476-svgrepo-com.png",
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 6,
        img: "./img/images (2).jpg",
        model: "Entertaiment Center",
        price: 83.68 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        imgDone: "./img/done-1476-svgrepo-com.png",
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 7,
        img: "./img/Снимок экрана 2025-01-08 200949.png",
        model: "Sofa Set",
        price: 54.48 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        imgDone: "./img/done-1476-svgrepo-com.png",
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 8,
        img: "./img/Снимок экрана 2025-01-08 200814.png",
        model: "Emperor Bed",
        price: 36.78 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        imgDone: "./img/done-1476-svgrepo-com.png",
        imgAbout: "./img/about-svgrepo-com.png",
    },

    {
        id: 9,
        img: "./img/Сним экрана 2025-01-08 224318.png",
        model: "Entertaiment Center",
        price: 53.98 + "$",
        imgDelete: "./img/delete-svgrepo-com.png",
        imgEdit: "./img/edit-3-svgrepo-com.png",
        imgDone: "./img/done-1476-svgrepo-com.png",
        imgAbout: "./img/about-svgrepo-com.png",
    },
]

let box = document.querySelector(".box");

function renderItems() {
box.innerHTML = ""; 
data.forEach((data) => {
    let container = document.createElement("div");
    container.classList.add("mebel");

    container.dataset.id = data.id;

    let image = document.createElement("img");
    image.src = data.img;
    image.classList.add("img-mebel")

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

    let Done = document.createElement("img");
    Done.src = data.imgDone;

    let about = document.createElement("img");
    about.src = data.imgAbout;

    tools.append(Delete, edit, price, Done, about);
    container.append(image, description, tools);
    box.append(container);

    Delete.onclick = () => {
        deleteBox(data.id);
    }
})
}

function deleteBox(id){
    data = data.filter((data) => data.id !== id)
    renderItems();
}

renderItems()