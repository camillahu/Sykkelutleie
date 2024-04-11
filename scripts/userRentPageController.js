
function getPaymentMethod (chosenPaymentMethod) {
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
    changePage(startRent);
}