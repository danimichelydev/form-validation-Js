let name =  document.querySelector("#name");
let email =  document.querySelector("#email");
let password =  document.querySelector("#password");
let button =  document.querySelector("button");
let error = document.querySelector("#error");
let pattern = /\S+@\S+\.\S+/;

button.addEventListener("click", (e) => {
    let count = [];
    if(name.value == "" || name.value == null || name.value.length < 4 ) {
        count.push(1) 
        name.classList.add("invalid")
        name.nextElementSibling.innerHTML = "Preencha um nome com pelo menos 4 caracteres!";
        name.nextElementSibling.style.opacity = "1";
    } else {
        name.classList.remove("invalid")
        name.nextElementSibling.style.opacity = "0";
    };

    if(!pattern.test(email.value)) {
        count.push(2)
        email.classList.add("invalid")
        email.nextElementSibling.innerHTML = "Preencha o email com um email válido!";
        email.nextElementSibling.style.opacity = "1";
    } else {
        email.classList.remove("invalid")
        email.nextElementSibling.style.opacity = "0";
    };


    if(password.value == "" || password.value == null || password.value.length < 6) {
        count.push(3)
        password.classList.add("invalid")
        password.nextElementSibling.innerHTML = "Preencha a senha com 6 ou mais caracteres!"
        password.nextElementSibling.style.opacity = "1";
    } else {
        password.classList.remove("invalid")
        password.nextElementSibling.style.opacity = "0";
    };

    if(count.length > 0) {
        e.preventDefault();
    };
});





