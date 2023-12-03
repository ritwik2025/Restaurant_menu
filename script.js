const itemList = document.querySelector(".items-list");
const item = document.querySelector(".add-item");
const items =  JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('input[type="text"]').value;
  const list = {
    text,
    done: false,
  };
  items.push(list);
  populateList(items, itemList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}
item.addEventListener("submit", addItem);

function populateList(items = [], itemList) {
  itemList.innerHTML = items
    .map((item, i) => {
      return `
            <li>
            <input type="checkbox" id="item${i}" ${item.done?'checked':''}/>
            <label for="item${i}">${item.text}</label>
            </li>
             `;
    })
    .join("");
}

//When u refresh the page
populateList(items, itemList);
