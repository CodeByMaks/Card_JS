let color = document.querySelector(".color");
let click = document.querySelector(".click");

click.onclick = () => {
    const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "lime", "teal"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
    color.innerHTML = colors[randomIndex];
}