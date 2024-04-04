
updateBicyclesView()
function updateCreateUserPageView() {
    app.innerHTML = /*HTML*/ `
    <div class="cupContainer">
    <h3>Create new user</h3>
        <div class="cupInputs">
        <input type="text"  onchange="fullNameInput(this.value)" placeholder="Full name"> <br>
        <input type="text"  onchange="usernameInput(this.value)"placeholder="Username"> <br>
        <input type="text"  onchange="passwordInput(this.value)" placeholder="Password"> <br>
        <input type="text"  onchange="addressInput(this.value)" placeholder="Address"> <br>
        <input type="text"  onchange="emailInput(this.value)" placeholder="Email"> <br>
        <p class="cupInputMsg">${inputMsg}</p>

        <button type="submit" onclick="createUser()">Submit</button>
        </div>
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
    <br> <button onclick="setSelectedBike(0)">Rent this bike</button>
    </div>
    <div class="bicyclePic2"><img src="sykkel2.jpg"> <br>
    Awesome
    ${model.data.bicycles[1].color} 
    ${model.data.bicycles[1].bicycleModel}. <br>
    Currently located at ${model.data.bicycles[1].location}. <br>
    Price per hour: ${model.data.bicycles[1].pricePerHour}kr.
    <br> <button onclick="setSelectedBike(1)">Rent this bike</button>
    </div>
    
   </div>
   
   `
}



function updateUserRentPageView() {
    let bicycle = model.data.bicycles.find(bicycle=> bicycle.bicycleId == model.data.selectedBikeId)
    console.log(bicycle)
        app.innerHTML = /*HTML*/ `
        <div class="uURPWInfo"><img src=${bicycle.img}> <br>
    Model: ${bicycle.bicycleModel} <br>
    Location: ${bicycle.location} <br>
    Price per hour: ${bicycle.pricePerHour}kr.
    <br> <button onclick="getPaymentMethod(0)">Visa</button>
     <button onclick="getPaymentMethod(1)">MasterCard</button>
     <button onclick="getPaymentMethod(2)">PayPal</button>
    </div>

    <div>${model.data.messages.rentMessage}</div>
        
        `

}

function getRentStartedMsg() {
    
}



function updateOwnerInputView() {
    
    app.innerHTML = /*HTML*/ `
    
   
   `
}
;


function updateUserEndRentPageView() {
    app.innerHTML = /*HTML*/ `
   
   `
}
