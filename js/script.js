const email = document.getElementById("email");

let popup = document.getElementById("popup");
let white = document.getElementById("white");

let closePopup = () => {
  popup.classList.remove("openpopup");
  white.classList.remove("hidden")
};
let openPopup = () => {
  popup.classList.add("openpopup");
  white.classList.add("hidden")
};

let sendmail = () => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kmblak8@gmail.com",
    Password: "17114B6058BD304FCFFB88B9CE009C4CFCE3",
    To: email.value,
    From: "kmblak8@gmail.com",
    Subject: "Account confirmation",
    Body: "your account has been verified",
  }).then((message) => alert(message));
  console.log("hello")
};


let submit = () => {
  sendmail();
  openPopup();
 
};