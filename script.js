const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const btn = document.getElementById("btn");

function login() {
    loginForm.style.left = "0px";
    registerForm.style.left = "400px";
    btn.style.left = "0px";
}

function register() {
    loginForm.style.left = "-400px";
    registerForm.style.left = "0px";
    btn.style.left = "110px";
}

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userId = registerForm.querySelector(".input-field[placeholder='User id']").value;
    const email = registerForm.querySelector(".input-field[placeholder='Enter Email']").value;
    const password = registerForm.querySelector(".input-field[placeholder='Enter password']").value;
    const agreeTerms = registerForm.querySelector(".check-box").checked;

    if (!agreeTerms) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    if (userId && email && password) {
        const user = { userId, email, password };
        localStorage.setItem(userId, JSON.stringify(user));
        alert("Registration successful!");
        registerForm.reset();
        login();
    } else {
        alert("Please fill in all fields.");
    }
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userId = loginForm.querySelector(".input-field[placeholder='user id']").value;
    const password = loginForm.querySelector(".input-field[placeholder='enter password']").value;

    const user = JSON.parse(localStorage.getItem(userId));

    if (user && user.password === password) {
        alert(`Welcome back, ${userId}!`);
        loginForm.reset();
    } else {
        alert("Invalid user ID or password. Please try again.");
    }
});
