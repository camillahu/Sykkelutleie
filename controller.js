function  createUser() {
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

function nameInput(name) {
    let nameInput = name;

    if (nameInput!= '' && nameInput.contains(' ')) {
        inputMsg = ""
    } else {
        inputMsg = "You have to type in your full name correctly."
    }
    
    updateCreateUserPageView();
}
function usernameInput(username) {
    model.input.createUserPage.username = username
}
function passwordInput() {

}
function addressInput() {

}
function emailInput() {

}