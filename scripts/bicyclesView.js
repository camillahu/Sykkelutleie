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