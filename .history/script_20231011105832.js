let addInput = document.getElementById("add");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  let list = document.getElementById("list-div");
  let ul = document.createElement("ul");
  ul.classList.add("list");
  let li = document.createElement("li");
  ul.appendChild(li);
  list.appendChild(ul);

  let input = document.getElementById("input");
  input.classList.add("list-text");
  input.type = "text";
  input.id = "edit";
  input.setAttribute("readonly", "readonly");
  li.appendChild(input);

  let text = document.createElement("input");
  let label = document.createElement("label");
  let editBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
});
