
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
    updateCreateUserPageView();
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

function getPaymentMethod (chosenPaymentMethod) {
    let html="";
    if(chosenPaymentMethod == 0) {
        model.input.userEndRentPage.paymentMethodId = 0; 
        
    } 
    else if (chosenPaymentMethod == 1){
        model.input.userEndRentPage.paymentMethodId = 1;
        
        
    } else 
    {model.input.userEndRentPage.paymentMethodId = 2;
        
        
    }
    model.data.messages.rentMessage = `Confirm rent? 
    <button onclick="getRentStartedMsg()">Yes</button>
    <button onclick="updateBicyclesView()">No</button>
    `;
        updateUserRentPageView();
}

function setSelectedBike (bikeId){
    model.app.currentPage=  "user rent page"
    model.data.selectedBicycleId = bikeId;
    updateUserRentPageView();
}