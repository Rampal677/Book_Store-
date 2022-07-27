document.getElementById('icon').style.display = "none"
document.getElementById('icon3').style.display = "none"
document.getElementById('icon4').style.display = "none"
document.getElementById('icon5').style.display = "none"
document.getElementById('warning').style.display = "none"



function validation() {
  var Fname = document.getElementById('Fname').value;
  var Lname = document.getElementById('Lname').value;
  var Email = document.getElementById('Email').value;
  var Password = document.getElementById('Password').value;
  var Cpass = document.getElementById('Cpass').value;
  //var Gender = document.getElementById('male').value;

  // ------------------------------Fname---------------------------------------

  if (Fname == "") {
    document.getElementById('first-name-massage').innerHTML = "**Please fill the name"
    document.getElementById('icon').style.display = "none"
    return false;

  } else if ((Fname.length <= 3) || (Fname.length > 20)) {
    document.getElementById('first-name-massage').innerHTML = "**lenth must be between 2 & 20"
    document.getElementById('icon').style.display = "none"
    return false;
  } else if (!isNaN(Fname)) {
    document.getElementById('first-name-massage').innerHTML = "**only characters are allowed"
    document.getElementById('icon').style.display = "none"
    return false;
  } else {
    document.getElementById('icon').style.display = ""
    document.getElementById('first-name-massage').style.display = "none"
    document.getElementById('warning').style.display = ""
  }
  //-----------------------------Email---------------------------------------
  if (Email == "") {
    document.getElementById('email-message').innerHTML = "**Please fill the Email"
    document.getElementById('icon3').style.display = "none"
    return false;
  } else if ((Email.length <= 3) || (Email.length > 20)) {
    document.getElementById('email-message').innerHTML = "**lenth must be between 2 to 20"
    document.getElementById('icon3').style.display = "none"
    return false;
  } else if (!isNaN(Email)) {
    document.getElementById('email-message').innerHTML = "**only characters are allowed"
    document.getElementById('icon3').style.display = "none"
    return false;
  } else {
    document.getElementById('icon3').style.display = ""
    document.getElementById('email-message').style.display = "none"
  }
  //----------------------------Password---------------------------------
  if (Password == "") {
    document.getElementById('password-message').innerHTML = "**Please create password"
    document.getElementById('icon4').style.display = "none"
    return false;
  } else if ((Password.length <= 5) || (Password.length > 15)) {
    document.getElementById('password-message').innerHTML = "**lenth must be between 6 to 10"
    document.getElementById('icon4').style.display = "none"
    return false;
  } else if (Password != Cpass) {
    document.getElementById('confirm-password-message').innerHTML = "** Password not match"
    document.getElementById('icon4').style.display = "none"
    document.getElementById('icon5').style.display = "none"
    return false;
  } else {
    document.getElementById('icon4').style.display = ""
    document.getElementById('icon5').style.display = ""
    document.getElementById('password-message').style.display = "none"
    document.getElementById('confirm-password-message').style.display = "none"
    alert("regisration Successfully")
    document.getElementById('sccss').innerHTML = "Successfully Submitted!"
    document.getElementById("signup").onclick = function() {
      window.location.href = "LoginSignup.html";
    };
  }
}

function show() {
  var x = document.getElementById("Password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function show2() {
  var x = document.getElementById("Cpass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}