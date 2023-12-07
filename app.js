let names = [
  "Jonas",
  "Petras",
  "Paulius",
  "Saulius",
  "Egle",
];


let searchbox = document.getElementById("searchbox");

searchbox.addEventListener("keyup", (e) => {
  removeElements();
  for (let i of names) { 
    if (
      //Paieska prasideda parasius mazaja raide
      i.toLowerCase().startsWith(searchbox.value.toLowerCase()) &&
      searchbox.value != ""
    ) {
      let listItem = document.createElement("li");
      listItem.classList.add("person");
      listItem.setAttribute("onclick", ('" + i + "'));
      listItem.innerHTML = i;
      document.querySelector(".result").appendChild(listItem);
    }
  }
});
function removeElements() {
  let items = document.querySelectorAll(".person");
  items.forEach((item) => {
    item.remove();
  });
}

console.log(names)

// document.getElementById('result').innerHtml = '';
// let newPersonsList = persons;
// if (fName !== '') {
//   newPersonsList = newPersonsList.filter(p => p.vardas === fName)
// }