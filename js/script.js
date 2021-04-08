const chatSection = document.querySelectorAll(".chat");

chatSection.forEach((chatSelected, index) => {
  chatSelected.addEventListener("mouseover", () => {
    const arrowContainer = document.querySelectorAll(".hour");
    arrowContainer.item(index).classList.add("hourHover");
  });

  chatSelected.addEventListener("mouseout", () => {
    const arrowContainer = document.querySelectorAll(".hour");
    arrowContainer.item(index).classList.remove("hourHover");
  });
});
