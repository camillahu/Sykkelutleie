function updateLogInView() {
    app.innerHTML = /*HTML*/ `
    <div class="LIContainer">
        <h2>Kjell Arnt Bernard Fjodåsens Sykkelimperium</h2>
        <input 
        type="text"
        onchange="setUsernameInput(this.value)"
        placeholder="brukernavn"
        >
        <input
        type="password"
        onchange="setPasswordInput(this.value)"
        placeholder="passord"
        >
        <button onclick="logIn()">Logg in</button>

        <div class="LISignUpDiv">Don't have an account? <span onclick="changePage('createUser')" class="LISignUpSpan">Sign up</span> today!</div>
        <div>${model.data.messages.logInErrorMessage}</div>
    </div>
    `
}