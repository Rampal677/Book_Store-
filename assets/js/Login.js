document.getElementById('icon1').style.display = "none"
document.getElementById('icon2').style.display = "none"
document.getElementById('custom_alert').style.display = "none"
document.getElementById('wicon1').style.display = "none"
document.getElementById('wicon2').style.display = "none"

function validation() {

  var Email = document.getElementById('Email').value;
  var Password = document.getElementById('Password').value;
  var pass = "12345678";

  //-----------------------------Email---------------------------------------
  if (Email == "") {
    document.getElementById('email-message').innerHTML = "**Please fill the Email"
    document.getElementById('wicon1').style.display = ""
    document.getElementById('icon1').style.display = "none"
    return false;
  } else if (Email.length <= 3) {
    document.getElementById('email-message').innerHTML = "**lenth must be grater then 2 "
    document.getElementById('wicon1').style.display = ""
    document.getElementById('icon1').style.display = "none"
    return false;
  } else if (!isNaN(Email)) {
    document.getElementById('email-message').innerHTML = "**only characters are allowed"
    document.getElementById('wicon1').style.display = ""
    document.getElementById('icon1').style.display = "none"
    return false;
  } else {
    document.getElementById('icon1').style.display = ""
    document.getElementById('wicon1').style.display = "none"
    document.getElementById('email-message').style.display = "none"

  }
  //----------------------------Password---------------------------------
  if (Password == "") {
    document.getElementById('password-message').innerHTML = "**Please enter the password"
    document.getElementById('wicon2').style.display = ""
    document.getElementById('icon2').style.display = "none"
    return false;
  } else if ((Password.length <= 5) || (Password.length > 15)) {
    document.getElementById('password-message').innerHTML = "**lenth must be between 6 to 15"
    document.getElementById('wicon2').style.display = ""
    document.getElementById('icon2').style.display = "none"
    return false;
  } else if (Password != pass) {
    document.getElementById('password-message').innerHTML = "**password or User_mail is not correct"
    document.getElementById('wicon2').style.display = ""
    document.getElementById('icon2').style.display = "none"
    return false;
  } else {
    document.getElementById('icon2').style.display = ""
    document.getElementById('wicon2').style.display = "none"
    document.getElementById('password-message').style.display = "none"
    document.getElementById('sccss').innerHTML = "Login Successfully!"
    alert("Login successfully!")


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
  var x = document.getElementById("Cpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}