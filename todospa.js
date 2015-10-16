newItem = function() {
  alert("hello");
  var li;
  var input;
  var ul;
  ul = document.querySelector(#ul);
  input = document.querySelector(#input).value;
  li = document.createElement("li");
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);
  var priority;
  priority = document.querySelector(#priority).value;
  li.style.class = "." + priority;
  }
    
