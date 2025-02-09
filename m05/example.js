//Ask user for number 1 - 10
var table = prompt("Enter a number form 0 to 10");            

//operator = GetValueFromUser("operator");
//table = GetValueFromUser("table")
table = parseInt(table) // Make into integer

if (isNaN(table) || table === null) {
    table = 0;
} // turns null of Nan Response to 0

//Write the message into the page
var el = document.getElementById('blackboard'); 
el.innerHTML = GetTableContent(table);

/*function GetValueFromUser(valueType) {
  var greetingMessage = 'Hello. How are you?';
  if (valueType == "operator") {
    greetingMessage += "Enter addition or multiplication";
  }
  else
  {
    greetingMessage += "Enter table";
  }
  return prompt(greetingMessage);
}*/

function GetTableContent(table) {
  var i = 1;                 // Set counter to 1
  var msg = '<h2>Multiplication Table</h2>';              // Heading message
 /* if (operator === 'addition') {
    // Do addition
    while (i < 11) {
      msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
      i++;
    }
  } else {*/
    // Do multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  
  return msg;
}
