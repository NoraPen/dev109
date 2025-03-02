function isValid() {
    if (firstName() &&
        lastName() &&
        emailValidation() &&
        phoneValidation() &&
        usernameValidation() &&
        passwordValidaiton() &&
        addressValidation() &&
        cityValidation() &&
        stateValiadtion() &&
        countryValidation() &&
        zipcodeValidation()
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}


// FIRST NAME
FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};


//LAST NAME 
LastName.addEventListener('blur', lastName, false);
function lastName(){
    //1) Create variable
    var validLastname=false;

    //2) read value from HTML
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) Do validation
    if (lastname==="null" || lastname==="" || lastname.length > 20 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validLastname = true;
                console.log("Last name valid")
        };

    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;

    //5) return status of each field
    return (validLastname);
};


//EMAIL
Email.addEventListener('blur', emailValidation, false);
function emailValidation(){
      var validEmail = false;
      var userEmail = document.getElementById("Email").value;
      var errorMessages = "";
      var atpos = userEmail.indexOf("@");
      var dotpos = userEmail.lastIndexOf(".");
      if (userEmail === "" || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email</p>";
      } else {
        validEmail = true;
      }
      document.getElementById("emailError").innerHTML = errorMessages;
      return validEmail;
    }

//PHONE
Phone.addEventListener('blur', phoneValidation, false);
function phoneValidation() {
        var validPhone = false;
        var errorMessages = "";
        var phone = document.getElementById("Phone").value;
        
        var numbers = /^[0-9]+$/;

        if (phone === "" || phone.length > 15 || !phone.match(numbers)) {
            errorMessages += "<p>Invalid phone number. Must be numerical and cannot be greater than 15 digits.</p>";
        } else {
            validPhone = true;
        }

        document.getElementById("phoneError").innerHTML = errorMessages;
        return validPhone;
    }


//USERNAME
Username.addEventListener('blur', usernameValidation, false);
function usernameValidation(){
      var validUsername = false;
      var username = document.getElementById("Username").value;
      var errorMessages = "";
      if (username === "" || username.length > 12) {
        errorMessages += "<p>Username is required and cannot be greater than 12 characters</p>";
      } else {
        validUsername = true;
      }
      document.getElementById("usernameError").innerHTML = errorMessages;
      return validUsername;
    }

//PASSWORD
Password.addEventListener('blur', passwordValidation, false);
function passwordValidation(){
      var validPassword = false;
      var password = document.getElementById("Password").value;
      var errorMessages = "";
      if (password === "" || password.length > 7) {
        errorMessages += "<p>Password is required and cannot be greater than 7 characters</p>";
      } else {
        validPassword = true;
      }
      document.getElementById("passwordError").innerHTML = errorMessages;
      return validPassword;
    }

// ADDRESS
Address.addEventListener('blur', addressValidation, false);
function addressValidation(){
      var validAddress = false;
      var address = document.getElementById("Address").value;
      var errorMessages = "";
      if (address === "") {
        errorMessages += "<p>Address is required</p>";
      } else {
        validAddress = true;
      }
      document.getElementById("addressError").innerHTML = errorMessages;
      return validAddress;
    }


//CITY
City.addEventListener('blur', cityValidation, false);
function cityValidation(){
      var validCity = false;
      var city = document.getElementById("City").value;
      var errorMessages = "";
      if (city === "") {
        errorMessages += "<p>City is required</p>";
      } else {
        validCity = true;
      }
      document.getElementById("cityError").innerHTML = errorMessages;
      return validCity;
    }

//STATE
State.addEventListener('change', stateValidation, false);
function stateValidation(){
      var validState = false;
      var state = document.getElementById("State").value;
      var errorMessages = "";
      if (state === "") {
        errorMessages += "<p>Please select a state</p>";
      } else {
        validState = true;
      }
      document.getElementById("stateError").innerHTML = errorMessages;
      return validState;
    }

//COUNTRY
Country.addEventListener('change', countryValidation, false);
function countryValidation(){
      var validCountry = false;
      var country = document.getElementById("Country").value;
      var errorMessages = "";
      if (country === "") {
        errorMessages += "<p>Please select a country</p>";
      } else {
        validCountry = true;
      }
      document.getElementById("countryError").innerHTML = errorMessages;
      return validCountry;
    }

//ZIPCODE
ZipCode.addEventListener('blur', zipcodeValidation, false);
function zipcodeValidation(){
      var validZipcode = true; 
      var zipcode = document.getElementById("ZipCode").value;
      var errorMessages = "";
      var country = document.getElementById("Country").value;
      if (country === "USA") {
        if (zipcode === "" || zipcode.length > 5 || !/^[0-9]+$/.test(zipcode)) {
          errorMessages += "<p>Invalid Zip Code. Must be numerical and up to 5 digits.</p>";
          validZipcode = false;
        }
      }
      document.getElementById("zipcodeError").innerHTML = errorMessages;
      return validZipcode;
    }


