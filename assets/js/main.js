const calculator = document.querySelector(".calculator");

initializeCalCListeners(calculator);

addDropdownLisener(document.querySelectorAll(".search-select"));

function addDropdownLisener(searchDivs) {
  const dropdowns = searchDivs;

  const body = document.body;

  dropdowns.forEach((dropdown) => {
    dropdown.querySelectorAll(".option").forEach((option) => {
      option.addEventListener("click", (event) => {
        const parent = option.parentElement.parentElement;
        if (
          option.classList.contains("colors") ||
          option.classList.contains("white")
        ) {
          parent.classList.toggle("color-div-colors");
        }
        parent.querySelector("input").value = event.currentTarget.textContent;
      });
    });

    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("opened");
    });
  });

  const closeDropdownsFromOutside = () => {
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains("opened")) {
        dropdown.classList.remove("opened");
      }
    });
  };

  body.addEventListener("click", closeDropdownsFromOutside);
}

document.querySelectorAll(".open-close").forEach((btn) => {
  openWindowContent(btn);
});

document.querySelectorAll(".copy").forEach((element) => {
  element.addEventListener("click", () => {
    const originalCalculator = element.closest(".calculator");

    if (originalCalculator) {
      const clone = cloneCalculator(originalCalculator);
      document.querySelector(".calculator-div").appendChild(clone);
    }
  });
});

function cloneCalculator(original) {
  const clone = original.cloneNode(true);
  const basket = clone.querySelector(".basket");

  basket.style.display = "block";

  const windowCount = document.querySelectorAll(".calculator").length;
  clone.querySelector(".window-number").innerText = windowCount + 1;
  clone.querySelector(".calculator-content").classList.toggle("display-toggle");
  clone.querySelector(".open-close").classList.toggle("opened");

  openWindowContent(clone.querySelector(".open-close"));
  initializeCalCListeners(clone);
  removeCalculator(basket);

  clone.querySelectorAll(".copy").forEach((copyElement) => {
    copyElement.addEventListener("click", () => {
      const parentCalculator = copyElement.closest(".calculator");
      if (parentCalculator) {
        const clonedParent = cloneCalculator(parentCalculator);
        document.querySelector(".calculator-div").appendChild(clonedParent);
      }
    });
  });

  return clone;
}

document.querySelectorAll(".basket").forEach((btn) => {
  removeCalculator(btn);
});

function openWindowContent(btn) {
  btn.addEventListener("click", () => {
    btn.classList.toggle("opened");
    btn.parentElement.parentElement
      .querySelector(".calculator-content")
      .classList.toggle("display-toggle");
    btn.parentElement.parentElement
      .querySelector(".closed-items")
      .classList.toggle("display-flex-toggle");
  });
}

function removeCalculator(removeBtn) {
  const calcCount = document.querySelectorAll(".calculator").length;
  removeBtn.addEventListener("click", () => {
    removeBtn.parentElement.parentElement.remove();
  });
}

function initializeCalCListeners(calculator) {
  const windows = calculator.querySelectorAll(".window");
  const windowOptions = calculator.querySelectorAll(".window-options");
  const windowIcons = calculator
    .querySelector(".calculator-right-item-content")
    .querySelectorAll("span");

  windowIcons.forEach((wind) => {
    wind.addEventListener("click", () => {
      windowIcons.forEach((wind2) => {
        wind2.classList.remove("active-window");
      });
      wind.classList.add("active-window");
    });
  });

  calculator
    .querySelector("#width-input")
    .addEventListener("change", (input) => {
      calculator.querySelector("#width-size").innerText = input.target.value;
    });

  calculator
    .querySelector("#height-input")
    .addEventListener("change", (input) => {
      calculator.querySelector("#height-size").innerText = input.target.value;
    });

  windows.forEach((wind) => {
    wind.addEventListener("click", () => {
      const mainWindow = calculator.querySelector(".main-window");
      let src = "./assets/images/calc/window-1.png";
      let windowContent = "";
      let windowSmallIconHref = "";
      let title = "";
      windowOptions.forEach((w) => {
        w.style.display = "none";
      });
      if (wind.id === "window-1") {
        src = "./assets/images/calc/window-1.png";
        windowContent = "window-1-option";
        windowSmallIconHref = "#window-1-small-icon";
        title = "Одностворчатое окно";
      } else if (wind.id === "window-2") {
        src = "./assets/images/calc/window-2.png";
        windowContent = "window-2-option";
        windowSmallIconHref = "#window-2-small-icon";
        title = "Двухстворчатое окно";
      } else if (wind.id === "window-3") {
        src = "./assets/images/calc/window-3.png";
        windowContent = "window-3-option";
        windowSmallIconHref = "#window-3-small-icon";
        title = "Трехстворчатое окно";
      } else if (wind.id === "window-4") {
        src = "./assets/images/calc/window-4.png";
        windowContent = "window-4-option";
        windowSmallIconHref = "#window-4-small-icon";
        title = "Трехстворчатое окно с фрамугой";
      } else if (wind.id === "window-5") {
        src = "./assets/images/calc/window-5.png";
        windowContent = "window-5-option";
        windowSmallIconHref = "#window-5-small-icon";
        title = "Арочное окно";
      } else {
        src = "./assets/images/calc/window-6.png";
        windowContent = "window-6-option";
        windowSmallIconHref = "#window-6-small-icon";
        title = "Балконный блок";
      }
      mainWindow.src = src;
      calculator.querySelector(`.${windowContent}`).style.display = "flex";
      calculator.querySelector(".window-text").innerText = title;
      calculator.querySelector(".window-header-svg").href.baseVal =
        windowSmallIconHref;
    });
  });
}
