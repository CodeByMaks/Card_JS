let savedUser = JSON.parse(localStorage.getItem("users"));

let userId = localStorage.getItem("selectedUserId");
let user = savedUser.find((u) => u.id == userId);

if (user) {
  document.querySelector(".courseName").textContent = user.CourseName;
  document.querySelector(".course-name-navigate").textContent = user.CourseName;
  document.querySelector(".categoryProg").textContent = user.proffess;
  document.querySelector(".location").textContent = user.continent;
  document.querySelector(".level").textContent = user.level;
} else {
  console.error("Пользователь не найден или данные повреждены");
}

let btnApply = document.querySelector(".btnApply");
btnApply.onclick = () => {
  localStorage.setItem("selectedCategory", user.proffess); 
  window.location.href = "/main/Details/index.html";
};
