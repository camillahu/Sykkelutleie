
updateUserRentPageView(0);
function updateCreateUserPageView() {
    app.innerHTML = /*HTML*/ `
    <div class="cupContainer">
    <h3>Create new user</h3>
        <form class="cupInputs">
        <input type="text"  onchange="fullNameInput(this.value)" placeholder="Full name"> <br>
        <input type="text"  onchange="usernameInput(this.value)"placeholder="Username"> <br>
        <input type="text"  onchange="passwordInput(this.value)" placeholder="Password"> <br>
        <input type="text"  onchange="addressInput(this.value)" placeholder="Address"> <br>
        <input type="text"  onchange="emailInput(this.value)" placeholder="Email"> <br>
        <p class="cupInputMsg">${inputMsg}</p>

        <button type="submit" onclick="${createUser()}">Submit</button>
        </form>
    </div>
   `
}
// id="nameInput"
// id="usernameInput"
// id="passwordInput"
// id="addressInput"
// id="emailInput"

function updateBicyclesView() {
    app.innerHTML = /*HTML*/ `
    <div class= "uBVContainer">
    <h1 class="uBVHeader">Bicycles for rent</h1>
    <div class="bicyclePic1"><img src="sykkel1.jpg"> <br>
    Beautiful
    ${model.data.bicycles[0].color} 
    ${model.data.bicycles[0].bicycleModel}. <br>
    Currently located at ${model.data.bicycles[0].location}. <br>
    Price per hour: ${model.data.bicycles[0].pricePerHour}kr.
    <br> <button onclick="updateUserRentPageView(0)">Rent this bike</button>
    </div>
    <div class="bicyclePic2"><img src="sykkel2.jpg"> <br>
    Awesome
    ${model.data.bicycles[1].color} 
    ${model.data.bicycles[1].bicycleModel}. <br>
    Currently located at ${model.data.bicycles[1].location}. <br>
    Price per hour: ${model.data.bicycles[1].pricePerHour}kr.
    <br> <button onclick="updateUserRentPageView(1)">Rent this bike</button>
    </div>
    
   </div>
   
   `
}


function updateOwnerInputView() {
    
    app.innerHTML = /*HTML*/ `
    
   
   `
}
;
function updateUserRentPageView(bikeId) {
    if(bikeId == 0) {
        app.innerHTML = /*HTML*/ `
        <div class="uURPWInfo"><img src="sykkel1.jpg"> <br>
    Model: ${model.data.bicycles[0].bicycleModel} <br>
    Location: ${model.data.bicycles[0].location} <br>
    Price per hour: ${model.data.bicycles[0].pricePerHour}kr.
    <br> <button onclick="getPaymentMethod (0)">Visa</button>
     <button onclick="getPaymentMethod (1)">MasterCard</button>
     <button onclick="getPaymentMethod (2)">PayPal</button>
    </div>
        
        `
    } else if (bikeId == 1) {
        app.innerHTML = /*HTML*/ `
   
        `
    } else {
        alert("no bike selected");
    }
}

function updateUserEndRentPageView() {
    app.innerHTML = /*HTML*/ `
   
   `
}

// forskjellige view for hver side
// 