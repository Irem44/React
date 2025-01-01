const ul = document.querySelector(".list");
const ara = document.querySelector(".add");
const word = document.getElementById("word");
const sirala = document.getElementById("sirala");
const temizle = document.getElementById("temizle");
const all = document.getElementById("allFilter");

// const unlearned = document.getElementById("unlearned");

ara.addEventListener("click", wordList);
sirala.addEventListener("click", sortList);
temizle.addEventListener("click", clean);

// unlearned.addEventListener("click", unlearnedList);
isEmpty();
loadList();

function isEmpty() {
  const alert = document.getElementById("alert");
  if (ul.innerHTML == "") {
    alert.style.display = "block";
  } else {
    alert.style.display = "none";
  }
}

function wordList(e) {
  e.preventDefault();

  if (word.value.trim().length == 0) {
    alert("Lütfen bir kelime giriniz.");
  } else {
    const word1 = addWord(word);
    const myList = ul.querySelectorAll("div");
    let kelimeVar = false;
    for (let myListItem of myList) {
      if (myListItem.textContent === word.value) {
        kelimeVar = true;
        break;
      }
    }
    if (!kelimeVar) {
      const word1 = addWord(word);
      ul.appendChild(word1);
      word.value = "";
    } else {
      alert("Kelime listede var.");
      word.value = "";
    }
  }
  isEmpty();
  saveList();
}

//Bir element eklerken li elementine gelicek otomatik özellikler

function addWord(item) {
  //input
  const input = document.createElement("input");
  input.type = "checkBox";
  input.className = "me-2 ";
  input.addEventListener("change", toggleCompleted);

  //div
  const div = document.createElement("div");
  div.className = "item";
  div.innerText = item.value;
  div.id = Math.random();
  div.addEventListener("click", editMode);
  div.addEventListener("keydown", closeEnter);
  div.addEventListener("blur", closeEditMode);

  //i
  const i = document.createElement("i");
  i.className = "bi bi-x-lg closeIcon";
  i.addEventListener("click", closeIcon);

  //li
  const li = document.createElement("li");
  li.toggleAttribute("item-completed", input.checked);
  li.appendChild(input);
  li.appendChild(div);
  li.appendChild(i);

  return li;
}

function closeEditMode(e) {
  e.target.contentEditable = false;
  saveList();
}

function closeIcon(e) {
  const li = e.target.parentElement;
  ul.removeChild(li);
  saveList();
}

function toggleCompleted(e) {
  const li = e.target.parentElement;
  li.toggleAttribute("item-completed", e.target.checked);
}

function editMode(e) {
  const li = e.target.parentElement;
  if (li.hasAttribute("item-completed") == false) {
    e.target.contentEditable = true;
  }
  saveList();
}

function closeEnter(e) {
  if (e.key == "Enter") {
    e.target.contentEditable = false;
  }
}

function sortList() {
  const div = ul.querySelectorAll("div");
  const array = [];
  for (let dv of div) {
    array.unshift(dv.textContent);
  }

  array.sort();

  // Mevcut ul içeriğini temizle
  ul.innerHTML = "";

  // Sıralanmış dizi elemanlarını listeye ekle
  for (let text of array) {
    const li = addWord({ value: text });
    ul.appendChild(li);
  }
}

function clean() {
  ul.innerHTML = "";
  isEmpty();
  saveList();
}

function saveList() {
  const items = [];
  const listItems = ul.querySelectorAll("li");

  for (let li of listItems) {
    items.push(li.querySelector("div").textContent);
  }

  localStorage.setItem("wordList", JSON.stringify(items));
}

function loadList() {
  const items = JSON.parse(localStorage.getItem("wordList"));

  if (items) {
    for (let itt of items) {
      const words = addWord({ value: itt });
      ul.appendChild(words);
    }
  }
  isEmpty();
}

function learnedFilter(e) {
  const lrn = document.querySelectorAll(".list li");
  for (let item of lrn) {
    if (item.hasAttribute("item-completed") === false) {
      item.style.display = "none";
    }
  }
}
