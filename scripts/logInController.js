function logIn (usernameInput, passwordInput){

}

function setUsernameInput(usernameInput) {
    model.input.logIn.username= usernameInput;
}
function setPasswordInput(passwordInput) {
    model.input.logIn.password= passwordInput;
}

function checkIfUsernameExixts() {
    return model.data.users.some(user => user.username === model.input.logIn.username );  
    // denne sjekker om det finnes en bruker med dette brukernavnet. Den returnerer true dersom usernameInput finnes i arrayet. Hvis ikke, returnerer den false. 
}

function checkIfPasswordRight() {
    const user = model.data.users.find(user => user.username === model.input.logIn.username);

    if (user) {
        return user.password === model.input.logIn.password;
    }
    else {
        console.log("username does'nt exist") 
    }
}


//hæææ