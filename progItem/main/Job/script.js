let main = document.querySelector(".more-cards");

export function getUsers(arr) {
  main.innerHTML = "";
  arr.forEach((user) => {
    let cards = document.createElement("div");
    cards.classList.add("card-structure");

    cards.innerHTML = `
            <div class="descript-course">
                        <div>
                            <h4>${user.CourseName}</h4>
                            <p>${user.proffess}</p>
                        </div>
                        <div>
                            <span>${user.level}</span>
                        </div>
                    </div>
        `;

    let options = document.createElement("div");
    options.classList.add("options");
    let btnSee = document.createElement("button");
    btnSee.textContent = "SEE MORE";
    let p = document.createElement("p");
    p.innerHTML = user.continent;

    options.append(btnSee, p);
    cards.append(options);
    main.append(cards);

    btnSee.onclick = () => {
      localStorage.setItem("selectedCourseName", user.CourseName);
      localStorage.setItem("selectedUserId", user.id);
      window.location = "../SeeMoreInfo/index.html";
    };
  });

  localStorage.setItem("users", JSON.stringify(arr));
}
