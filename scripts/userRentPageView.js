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