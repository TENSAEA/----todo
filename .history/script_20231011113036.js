window.addEventListener("load", () => {
  let addInput = document.getElementById("add");
  let addBtn = document.getElementById("addBtn");

  addBtn.addEventListener("click", () => {
    console.log("clicked");
    let list = document.querySelector(".list-div");
    let ul = document.createElement("ul");
    ul.classList.add("list");
    let li = document.createElement("li");
    ul.appendChild(li);
    let input = document.createElement("input");
    input.classList.add("list-text");
    input.type = "text";
    input.id = "edit";
    input.setAttribute("readonly", "readonly");
    input.value = addInput.value;
    li.appendChild(input);

    let label = document.createElement("label");
    label.setAttribute("for", "edit");
    li.appendChild(label);
    let buttonOne = document.createElement("button");
    buttonOne.classList.add("edit");
    buttonOne.textContent = "Edit";
    label.appendChild(buttonOne);
    let buttonTwo = document.createElement("button");
    buttonTwo.classList.add("delete");
    buttonTwo.textContent = "Delete";
    label.appendChild(buttonTwo);

    let listHide = document.createElement("div");
    listHide.classList.add("list-hide");

    listHide.appendchile(ul);
    list.appendChild(listHide);
  });
});
