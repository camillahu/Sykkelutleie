
updateCreateUserPageView();
function updateCreateUserPageView(){
    app.innerHTML= /*HTML*/ `
    <div class="cupContainer">
    <h3>Create new user</h3>
        <div class="cupInputs">
        <form>
        <input type="text" id="nameInput" onchange="nameInput(this.value)" placeholder="Full name"> <p>${inputMsg}</p> <br>
        <input type="text" id="usernameInput" onchange="usernameInput(this.value)"placeholder="Username"> <br>
        <input type="text" id="passwordInput" placeholder="Password"> <br>
        <input type="text" id="addressInput" placeholder="Address"> <br>
        <input type="text" id="emailInput" placeholder="Email"> <br>

        <button type="submit" onclick="${createUser()}">Submit</button>
        </form>
        </div>
    </div>
   `
}




function updateBicyclesView(){
    application.innerHTML= /*HTML*/ `
   
   `
}


function updateOwnerInputView(){
    application.innerHTML= /*HTML*/ `
   
   `
}
;
function updateUserRentPageView(){
    application.innerHTML= /*HTML*/ `
   
   `
}

function updateUserEndRentPageView(){
    application.innerHTML= /*HTML*/ `
   
   `
}

// forskjellige view for hver side
// 