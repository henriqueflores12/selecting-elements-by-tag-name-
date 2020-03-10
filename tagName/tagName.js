var elements = document.getElementsByTagName("li"); //find <li> elements
if (elements.length > 0) {
  //if 1 or more  are found
  var el = elements[0]; //select the first one using array syntax
  el.className = "cool"; //change the value of its class attribute
}
console.log(elements);
console.log(el);
