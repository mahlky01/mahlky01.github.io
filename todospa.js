newItem = function() {
  var li;
  var input;
  var ul;
  var checkbox;
  ul = document.querySelector("#ul");
  input = document.querySelector("#input").value;
  li = document.createElement("li");
  ul.appendChild(li);
  checkbox = document.createElement("input");
  checkbox.type = 'checkbox';
  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(input));
  var priority;
  priority = document.querySelector("#priority").value;
  if (priority=='high') {
    li.className = "high"
  }
  if (priority=='med') {
    li.className = "med"
  }
  if (priority=='low') {
    li.className = "low"
  }
  }
  
check = function() {
  var text;
  text = this.parentNode;
  text.className = text.className + " strike";
  }
    
