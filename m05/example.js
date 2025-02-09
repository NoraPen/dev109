//Ask user for number 1 - 10
var table = prompt("Enter a number form 0 to 10");            

table = parseInt(table) // Make into integer

if (isNaN(table) || table === null) {
    table = 0;
} // turns null of Nan Response to 0

//Write the message into the page
var el = document.getElementById('blackboard'); 
el.innerHTML = GetTableContent(table);

function GetTableContent(table) {
  var i = 1;                 // Set counter to 1
  var msg = '<h2>Multiplication Table</h2>';              // Heading message
 
    // Do multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  
  return msg;
};
