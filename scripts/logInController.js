
function setUsernameInput(usernameInput) {
    model.input.logIn.username= usernameInput;
}
function setPasswordInput(passwordInput) {
    model.input.logIn.password= passwordInput;
}

function logIn (){

    for(let user of model.data.users) {
        if(model.input.logIn.username === user.username && model.input.logIn.password === user.password) {
            model.app.loggedInUser = user;
            model.input.logIn.username = '';
            model.input.logIn.password = '';
            model.data.messages.logInErrorMessage= '';
            if(user === model.data.users[0]) model.app.isAdmin = true;
            changePage('bicycles')
            return true;
        }
    }
    model.data.messages.logInErrorMessage = 'wrong username or password';
    updateLogInView();
    return false;
}