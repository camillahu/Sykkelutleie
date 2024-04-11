function createUser() {
    let newUser =
    {
        fullName: model.input.createUserPage.fullName,
        username: model.input.createUserPage.username,
        password: model.input.createUserPage.password,
        address: model.input.createUserPage.address,
        email: model.input.createUserPage.email,
    }


    model.data.users.push(newUser);
    changePage('bicycles');
}

function fullNameInput(name) {
    if (name != '' && name.includes(' ')) {
        inputMsg = ""
        model.input.createUserPage.fullName = name;
    } else {
        inputMsg = "You have to type in your full name correctly."
    }
}

function usernameInput(username) {
    if (username == '' || username.includes(' ')) {
        inputMsg = "You have to type in a valid username.";
    } else {
        inputMsg = "";
        model.input.createUserPage.username = username;
    }
}

function passwordInput(password) {
    if (password == '' || password.includes(' ')) {
        inputMsg = "You have to type in a valid password.";
    } else {
        inputMsg = "";
        model.input.createUserPage.password = password;
    }

}

function addressInput(address) {
    model.input.createUserPage.address = address;
    
}

function emailInput(email) {
    if (email != '' && email.includes('@')) {
        inputMsg = ""
        model.input.createUserPage.email = email;
    } else {
        inputMsg = "You have to type in a valid email."
    }
  
}