let selcted = document.querySelector(".active");

for (let i = 0; i < document.querySelector(".container").children.length; i++) {
  document
    .querySelector(".container")
    .children[i].addEventListener("click", () => {
      document
        .querySelector(".container")
        .children[i].classList.toggle("active");
      selcted.classList.toggle("active");
      selcted = document.querySelector(".container").children[i];
    });
}
