document.addEventListener("DOMContentLoaded", function () {
    // Menambahkan animasi perubahan background
    let body = document.body;
    let colors = ["#7b5cff", "#e14eca", "#ff6a00", "#ff2e63"];
    let currentIndex = 0;

    function changeBackground() {
        body.style.background = `linear-gradient(90deg, ${colors[currentIndex]}, ${colors[(currentIndex + 1) % colors.length]})`;
        currentIndex = (currentIndex + 1) % colors.length;
    }

    setInterval(changeBackground, 3000); // Ubah warna setiap 3 detik

    // Form login event
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah submit otomatis

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let message = document.getElementById("message");

        if (username === "admin" && password === "1234") {
            message.style.color = "green";
            message.textContent = "Login berhasil!";
        } else {
            message.style.color = "red";
            message.textContent = "Username atau password salah!";
        }
    });
});
