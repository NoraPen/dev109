 function addNewItem() {
            var input = document.getElementById("itemInput");
            var itemText = input.value.trim();
            
           
             var list = document.getElementById("todo");
             var newItem = document.createElement("li");
             newItem.textContent = itemText;
             list.appendChild(newItem);
                
             input.value = "";
            
        }


// Create a new element and store it in a variable.
  var newEl = document.createElement('li');

// Create a text node and store it in a variable.
  var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element.
  newEl.appendChild(newText);

// Find the position where the new element should be added.
  var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
  position.appendChild(newEl);

var input = document.getElementById("itemInput");
input.addEventListener("keypress", function(event) {
       if (event.key === "Enter") {
             addNewItem(); 
              }
}
