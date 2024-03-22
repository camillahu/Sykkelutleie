
updateCreateUserPageView();
function updateCreateUserPageView(){
    app.innerHTML= /*HTML*/ `
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