newItem = function() {
  var li;
  var input;
  var ul;
  var checkbox;
  ul = document.querySelector("#ul");
  input = document.querySelector("#input").value;
  li = document.createElement("li");
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
  checkbox = document.createElement("input");
  checkbox.type = 'checkbox';
  li.appendChild(checkbox);
  //var priority;
  //priority = document.querySelector(#priority).value;
  //li.style.class = "." + priority;
  }
    
