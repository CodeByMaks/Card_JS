const calcImg = document.querySelector(".calcImg");
const calcModal = document.querySelector(".calc_structure");
const historyDisplay = document.getElementById("history");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");
const exit = document.querySelector(".exit");

calcImg.onclick = () => {
  calcModal.showModal();

  exit.onclick = () => {
    calcModal.close();
  }

  let history = "";
  let result = "";
  let isNewInput = true;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      const value = button.textContent;

      if (!action) {
        if (isNewInput) {
          result = value === "0" ? "0" : value;
          isNewInput = false;
        } else {
          result += value;
        }
        updateResult();
      } else {
        handleAction(action, value);
      }
    });
  });

  function handleAction(action, value) {
    switch (action) {
      case "clear":
        history = "";
        result = "0";
        isNewInput = true;
        updateResult();
        updateHistory();
        break;

      case "parentheses":
        if (result.includes("(") && !result.includes(")")) {
          result += ")";
        } else {
          result += "(";
        }
        updateResult();
        break;

      case "percent":
        result = (parseFloat(result) / 100).toString();
        updateResult();
        break;

      case "divide":
      case "multiply":
      case "subtract":
      case "add":
        const operators = {
          divide: "/",
          multiply: "*",
          subtract: "-",
          add: "+",
        };
        history += `${result} ${operators[action]} `;
        result = "";
        isNewInput = true;
        updateHistory();
        break;

      case "negate":
        result = (parseFloat(result) * -1).toString();
        updateResult();
        break;

      case "decimal":
        if (!result.includes(".")) {
          result += ".";
          updateResult();
        }
        break;

      case "calculate":
        try {
          history += result;
          result = eval(history.replace(/x/g, "*"));
          updateHistory();
          updateResult();
          history = "";
        } catch (error) {
          result = "Error";
          updateResult();
        }
        isNewInput = true;
        break;

      default:
        console.error("Неизвестное действие:", action);
    }
  }

  function updateResult() {
    resultDisplay.textContent = result || "0";
  }

  function updateHistory() {
    historyDisplay.textContent = history;
  }
};
