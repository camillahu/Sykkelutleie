function logIn (){

    for(let user of model.data.users) {
        if(model.input.logIn.username === user.username && model.input.logIn.password === user.password) {
            model.app.loggedInUser == user;
            model.input.logIn.username = '';
            model.input.logIn.password = '';
            model.app.page = 'bicycles';
            updateMainView();
            return true;
        }
    }
    alert('wrong username or password');
    return false;
}

function setUsernameInput(usernameInput) {
    model.input.logIn.username= usernameInput;
}
function setPasswordInput(passwordInput) {
    model.input.logIn.password= passwordInput;
}
