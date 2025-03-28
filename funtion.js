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

            // Daftar user dan role
            let users = {
                "24960059": { password: "telkom135", role: "teamleader" },
                "admin": { password: "telkom135", role: "teknisi" }
            };

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

    // Halaman Teknisi (Hanya Bisa View)
    if (window.location.pathname.includes("dashboard_teknisi.html")) {
        if (localStorage.getItem("userRole") !== "teknisi") {
            window.location.href = "index.html";
        }
        document.getElementById("adminActions").style.display = "none"; // Sembunyikan aksi admin
    }

    // Halaman Team Leader
    if (window.location.pathname.includes("dashboard_teamleader.html")) {
        if (localStorage.getItem("userRole") !== "teamleader") {
            window.location.href = "index.html";
        }
    }

    // Logout Function
    if (document.getElementById("logoutButton")) {
        document.getElementById("logoutButton").addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userRole");
            window.location.href = "index.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginButton").addEventListener("click", function () {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var role = document.getElementById("role").value;

        // Validasi login untuk Teknisi
        if (username === "admin" && password === "telkom135" && role === "Teknisi") {
            alert("Login berhasil sebagai " + role);

            // Simpan sesi login ke localStorage
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userRole", role);

            // Redirect ke halaman dashboard
            window.location.href = "dashboard.html";
        } else {
            alert("Login gagal! Periksa username, password, dan role.");
        }
    });

    // Cek jika sudah login, langsung ke dashboard
    if (localStorage.getItem("isLoggedIn") === "true") {
        window.location.href = "dashboard.html";
    }
});
