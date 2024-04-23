function updateBicyclesView() {
    app.innerHTML = /*HTML*/ `
    <div class= "uBVContainer">
    <h1 class="uBVHeader">Bicycles for rent</h1>
    ${bicyclesLoop()}
   </div>
   
   `
}

function bicyclesLoop() {
    let bikes = model.data.bicycles
    let html = '';
    for (let i = 0; i < bikes.length; i++) {
        html += /*HTML*/ `
        <div class="bicyclePic1"><img src="${bikes[i].img}"> <br>
        ${bikes[0].color} ${bikes[i].bicycleModel} <br>
            Currently located at ${bikes[i].location}. <br>
            Price per hour: ${bikes[i].pricePerHour}kr.
            <br> <button onclick="setSelectedBike(${i})">Rent this bike</button>
        </div>
        `
    }
    return html
}



/* <div class="bicyclePic1"><img src="sykkel1.jpg"> <br>
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
    </div> */