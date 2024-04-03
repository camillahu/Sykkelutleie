
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
}

function fullNameInput(name) {
    if (name != '' && name.includes(' ')) {
        inputMsg = ""
        model.input.createUserPage.fullName = name;
    } else {
        inputMsg = "You have to type in your full name correctly."
    }

    updateCreateUserPageView();

}

function usernameInput(username) {
    if (username == '' || username.includes(' ')) {
        inputMsg = "You have to type in a valid username.";
    } else {
        inputMsg = "";
        model.input.createUserPage.username = username;
    }

    updateCreateUserPageView();
}

function passwordInput(password) {
    if (password == '' || password.includes(' ')) {
        inputMsg = "You have to type in a valid password.";
    } else {
        inputMsg = "";
        model.input.createUserPage.password = password;
    }

    updateCreateUserPageView();

}

function addressInput(address) {
    model.input.createUserPage.address = address;
    updateCreateUserPageView();
}

function emailInput(email) {
    if (email != '' && email.includes('@')) {
        inputMsg = ""
        model.input.createUserPage.email = email;
    } else {
        inputMsg = "You have to type in a valid email."
    }
    updateCreateUserPageView();
}

function getPaymentMethod (chosenPaymentMethod) {
    if(chosenPaymentMethod == 0) {
        model.input.userEndRentPage.paymentMethodId = 0;
    } 
    else if (chosenPaymentMethod == 1){
        model.input.userEndRentPage.paymentMethodId = 1;
    } else 
    {model.input.userEndRentPage.paymentMethodId = 2;}
    updateUserRentPageView();
}