let firBut = document.querySelector(".fir_but");
let secBut = document.querySelector(".sec_but");
let thirBut = document.querySelector(".thir_but");
let point = document.querySelector(".point");

firBut.onclick = () => {
    point.innerHTML++
    isColor();
}

secBut.onclick = () => {
    point.innerHTML = 0;
    point.style.color = 'black'
}

thirBut.onclick = () => {
    point.innerHTML--
    isColor();
}

function isColor(){
    if (point.innerHTML > 0){
        point.style.color = 'green';
    }
    else if(point.innerHTML < 0){
        point.style.color = 'red';
    }
    else{
        point.style.color = 'black'
    }
}