newItem = function {
  var li;
  var input;
  var ul;
  ul = document.querySelector(#ul);
  input = document.querySelector(#input).value;
  li = document.createElement("li");
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
  }
    
