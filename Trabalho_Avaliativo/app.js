const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.textMessage.value;
    checkFields(name, email, message)
});

function checkFields(name, email, message){

    if (name == ""){
        console.log("NOME VAZIOO");
        alert("The Name can't be empty!! Please correct it!");
        //This message will never show up because the field in HTML is required, will not be allowed to click in Sent.
    }
    if (email == ""){
        console.log("EMAIL VAZIOO!");
        alert("The Email can't be empty!! Please correct it!");
    }
    if (message == ""){
        console.log("MENSSAGEM VAZIOOO");
        alert("The Message can't be empty!! Please correct it!");
    }

    // console.log("Nome: " + name);
    // console.log("Email: " + email);
    // console.log("Message: " + message);

}