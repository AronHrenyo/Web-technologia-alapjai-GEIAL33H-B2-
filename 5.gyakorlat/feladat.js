function myFunction() {
   var element = document.getElementById("feladatUl");
   element.classList.toggle("line-through");
}

function myFunction2() {

// Create an "li" node:
const node = document.createElement("li");

// Create a text node:
const textnode = document.getElementById("name-input").value;

// Append the text node to the "li" node:
node.appendChild(textnode);

// Append the "li" node to the list:
document.getElementById("feladatUl").appendChild(node);
}
