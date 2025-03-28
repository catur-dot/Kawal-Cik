document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form submit otomatis

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
