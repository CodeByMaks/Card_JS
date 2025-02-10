//! Checkbox delete 
{/* <div id="items">
    <div><input type="checkbox" /> Элемент 1</div>
    <div><input type="checkbox" /> Элемент 2</div>
</div>
<button id="delete">Удалить выбранные</button> */}

document.querySelector("#delete").addEventListener("click", () => {
    const items = document.querySelectorAll("#items div");
    items.forEach(item => {
        const checkbox = item.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            item.remove(); // Удаляем элемент из HTML
        }
    });
});