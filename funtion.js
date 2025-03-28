document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        generateCaptcha();

        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let role = document.getElementById("role").value;
            let captchaInput = document.getElementById("captchaInput").value;
            let message = document.getElementById("message");

            let captchaText = document.getElementById("captchaText").innerText;

            if (captchaInput !== captchaText) {
                message.style.color = "red";
                message.textContent = "Captcha salah!";
                return;
            }

            if (username === "admin" && password === "1234") {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userRole", role);

                if (role === "teknisi") {
                    window.location.href = "dashboard_teknisi.html";
                } else {
                    window.location.href = "dashboard_teamleader.html";
                }
            } else {
                message.style.color = "red";
                message.textContent = "Username atau password salah!";
            }
        });
    }

    if (window.location.pathname.includes("dashboard_teknisi.html") || window.location.pathname.includes("dashboard_teamleader.html")) {
        if (localStorage.getItem("isLoggedIn") !== "true") {
            window.location.href = "index.html";
        }
    }
});

function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    window.location.href = "index.html";
}

// Captcha Generator
function generateCaptcha() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    for (let i = 0; i < 5; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captchaText").innerText = captcha;
}
