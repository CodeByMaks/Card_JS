let general = document.querySelector(".slider");
general.style.width = '80%';
general.style.height = '450px';
general.style.margin = 'auto';
general.style.marginTop = '10%';

let cards = document.querySelectorAll(".card_structure");
cards.forEach(card => {
    card.style.width = '330px';
    card.style.height = '450px';
    card.style.backgroundColor = 'white';
    card.style.borderRadius = '20px';
    card.style.padding = '20px 0px'
    card.style.boxShadow ='0px 0px 20px gray';
})

let iconLeft = document.querySelector(".icon_left");
iconLeft.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>`;
iconLeft.style.color = "white"

let iconRight = document.querySelector(".icon_right");
iconRight.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>`;
iconRight.style.color = "white"

let bottomSwitch = document.querySelectorAll(".transition");
bottomSwitch.forEach(value => {
    value.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>
`
    value.style.width = '35px';
    value.style.height = '35px';
    value.style.color = 'white';
})

let first_icon_social = document.querySelectorAll(".inbox");
first_icon_social.forEach(icon => {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>`;
    icon.style.width = '25px';
    icon.style.height = '25px';
    icon.style.color = 'purple'
});

let second_icon_social = document.querySelectorAll(".search");
second_icon_social.forEach(icon => {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>`;
    icon.style.width = '25px';
    icon.style.height = '25px';
    icon.style.color = 'purple'
});

let third_icon_social = document.querySelectorAll(".world");
third_icon_social.forEach(icon => {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
    </svg>`;
    icon.style.width = '25px';
    icon.style.height = '25px';
    icon.style.color = 'purple'
});

let photo = document.querySelector(".photo_blog");
    photo.src = `./img/Без названия (1).jpg`;
    photo.style.width = '150px'; 
    photo.style.height = '150px'; 
    photo.style.borderRadius = '25%'; 
    photo.style.objectFit = 'cover'; 
    photo.style.margin = '20px 0px'; 
    photo.style.border = '5px solid purple'

let photo_sec = document.querySelector(".photo_blog_sec");
    photo_sec.src = `./img/Без названия.jpg`;
    photo_sec.style.width = '150px'; 
    photo_sec.style.height = '150px'; 
    photo_sec.style.borderRadius = '25%'; 
    photo_sec.style.objectFit = 'cover'; 
    photo_sec.style.margin = '20px 0px'; 
    photo_sec.style.border = '5px solid purple'

let photo_thir = document.querySelector(".photo_blog_third");
    photo_thir.src = `./img/Без названия (1).png`;
    photo_thir.style.width = '150px'; 
    photo_thir.style.height = '150px'; 
    photo_thir.style.borderRadius = '25%'; 
    photo_thir.style.objectFit = 'cover'; 
    photo_thir.style.margin = '20px 0px'; 
    photo_thir.style.border = '5px solid purple'


let namee = document.querySelector(".name_author");
    namee.innerHTML = "Maks Donfort"
    namee.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    namee.style.fontSize = '25px'
    namee.style.textAlign = "center"

let names = document.querySelector(".sec_name_author");
    names.innerHTML = "Dominic Torento"
    names.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    names.style.fontSize = '25px'
    names.style.textAlign = "center"

let namess = document.querySelector(".third_name_author");
    namess.innerHTML = "Alina Caralova"
    namess.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    namess.style.fontSize = '25px'
    namess.style.textAlign = "center"

let proffes = document.querySelector(".proffession");
    proffes.innerHTML = "Web Developer"
    proffes.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    proffes.style.textAlign = "center"

let proffess = document.querySelector(".proffess");
    proffess.innerHTML = "Software Engineer"
    proffess.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    proffess.style.textAlign = "center"

let pro = document.querySelector(".pro");
    pro.innerHTML = "UX/UI Designer"    
    pro.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    pro.style.textAlign = "center"

let starcol = document.querySelectorAll(".starcol");
starcol.forEach(icon => {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" fill="purple"/>
</svg>`;
    icon.style.width = '25px';
    icon.style.height = '25px';
    icon.style.color = 'purple'
});

let star = document.querySelectorAll(".star");
star.forEach(icon => {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>`;
    icon.style.width = '25px';
    icon.style.height = '25px';
});

let butt = document.querySelectorAll(".about");
butt.forEach(button => {
   button.innerHTML = "About Me"
   button.style.padding = '10px 30px'
   button.style.borderRadius = '10px'
   button.style.backgroundColor = 'purple'
   button.style.color = 'white'
   button.style.fontSize = '15px'
});

let buttn = document.querySelectorAll(".hire");
buttn.forEach(button => {
   button.innerHTML = "Hire Me"
   button.style.padding = '10px 20px'
   button.style.borderRadius = '10px'
   button.style.backgroundColor = 'purple'
   button.style.color = 'white'
   button.style.fontSize = '15px'
});