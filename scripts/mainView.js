updateMainView();
function updateMainView() {
    let page = model.app.page;
    if (page == 'bicycles') {
        updateBicyclesView();
    }
    else if (page == 'createUser') {
        updateCreateUserPageView();
    }
    else if (page == 'startRent') {
        updateUserRentPageView();
    }
    else if (page == 'endRent') {
        updateUserEndRentPageView();
    }
    else if (page == 'adminInput') {
        updateAdminInputView();
    }
    else {
        updateLogInView();
    }
}

function getRentStartedMsg() {
    
}

// Vil få side-navigeringen til å funke, er litt forvirra

// Starte på get rent started og en timer. 







