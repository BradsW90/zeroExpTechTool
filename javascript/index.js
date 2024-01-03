let gridContainer = document.getElementById("gridContainer");
let sideBar = document.getElementById("sideBar");
let cloned = "";

for (i = 0; i < 37 * 20; i++) {
  let gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  gridItem.setAttribute("data-id", i);
  gridContainer.appendChild(gridItem);
}

sideBar.addEventListener("click", function (e) {
  let element = e.target.children;
  if (element.length === 0) {
    element = e.target;
    cloned = element.cloneNode(true);
    document.body.style.cursor = "grabbing";
    return;
  }
  cloned = element[0].cloneNode(true);
  document.body.style.cursor = "grabbing";
});

gridContainer.addEventListener("click", function (e) {
  if (cloned != "" && e.target.hasAttribute("data-id")) {
    e.target.appendChild(cloned);
    cloned = "";
    document.body.style.cursor = "grab";
  } else if (cloned === "" && !e.target.hasAttribute("data-id")) {
    let parent = e.target.parentNode;
    cloned = e.target;
    parent.removeChild(parent.firstChild);
    document.body.style.cursor = "grabbing";
  }
});
