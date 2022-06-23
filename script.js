const panels = document.querySelectorAll(".panel");
let selcted = document.querySelector(".panel.active");

for (let i = 0; i < panels.length; i++) {
  panels[i].addEventListener("click", () => {
    panels[i].classList.toggle("active");
    selcted.classList.toggle("active");
    selcted = panels[i];
  });
}
