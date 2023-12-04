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
            <input type="checkbox" id="item${i}" data-index=${i} ${item.done?'checked':''}/>
            <label for="item${i}">${item.text}</label>
            </li>
             `;
    })
    .join("");
}


//When u refresh the page
populateList(items, itemList);

function toggleDone(e){
  if (!e.target.matches('input')) return;
  const index=e.target.dataset.index;
  items[index].done=!items[index].done;
  localStorage.setItem('items',JSON.stringify(items));
  populateList(items, itemsList);
  ;//only then if done is true it will remain checked
}


itemList.addEventListener('click',toggleDone);

// const inputElements=document.querySelectorAll('input[type="checkbox"]');
// inputElements.forEach(function(inputElement) {
//   populateList(items, itemList)
//   inputElement.addEventListener('click', toggleDone);
// });

//When u refresh the page

