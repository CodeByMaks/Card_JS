let formSave = document.querySelector(".formSave");
let btnCancel = document.querySelector(".btnCancel");

let courseName = localStorage.getItem("selectedCourseName");
let category = localStorage.getItem("selectedCategory");

if (courseName) {
  document.querySelector(".course-name-navigate").textContent = courseName;
} else {
  console.error("CourseName не найден в localStorage");
}

let applicants = JSON.parse(localStorage.getItem("applicants")) || [];

formSave.onsubmit = (e) => {
  e.preventDefault();

  let imgInput = formSave["img"];
  let reader = new FileReader();

  reader.onload = function (event) {
    let newApplicant = {
      category: category,
      course: courseName,
      fullname: formSave["Fullname"].value,
      email: formSave["email"].value,
      phone: formSave["phoneNumber"].value,
      location: formSave["Location"].value,
      img: event.target.result,
    };

    applicants.push(newApplicant);
    localStorage.setItem("applicants", JSON.stringify(applicants));
    formSave.reset();

    window.location = "../Application/index.html";
  };

  if (imgInput.files.length > 0) {
    reader.readAsDataURL(imgInput.files[0]);
  } else {
    console.error("Изображение не загружено");
  }
};

btnCancel.onclick = () => {
  formSave.reset();
};
