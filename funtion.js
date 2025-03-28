document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginButton = document.getElementById("loginButton");
    const logoutButton = document.getElementById("logoutButton");

    // Jika ada login form, maka jalankan validasi login
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

            // Validasi Captcha
            if (captchaInput !== captchaText) {
                message.style.color = "red";
                message.textContent = "Captcha salah!";
                return;
            }

            // Daftar user dan role
            let users = {
                "24960059": { password: "telkom135", role: "teamleader" },
                "admin": { password: "telkom135", role: "teknisi" }
            };

            // Validasi Login
            if (users[username] && users[username].password === password) {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userRole", users[username].role);

                if (users[username].role === "teknisi") {
                    window.location.href = "dashboard_teknisi.html";
                } else if (users[username].role === "teamleader") {
                    window.location.href = "dashboard_teamleader.html";
                } else {
                    window.location.href = "index.html";
                }
            } else {
                message.style.color = "red";
                message.textContent = "Username atau password salah!";
            }
        });
    }

    // Cek Role & Redirect yang Tidak Sesuai
    let userRole = localStorage.getItem("userRole");

    if (window.location.pathname.includes("dashboard_teknisi.html") && userRole !== "teknisi") {
        window.location.href = "index.html";
    }

    if (window.location.pathname.includes("dashboard_teamleader.html") && userRole !== "teamleader") {
        window.location.href = "index.html";
    }

    // Logout Function
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userRole");
            window.location.href = "index.html";
        });
    }
});

// Fungsi Generate Captcha
function generateCaptcha() {
    let captchaText = Math.random().toString(36).substring(2, 8).toUpperCase();
    document.getElementById("captchaText").innerText = captchaText;
}
