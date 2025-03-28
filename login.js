function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    if (username === "24960059" && password === "telkom135" && role === "Team Leader") {
        alert("Login berhasil sebagai Team Leader");
        window.location.href = "dashboard_teamleader.html"; // Redirect ke halaman Team Leader
    } else if (username === "admin" && password === "telkom135" && role === "Teknisi") {
        alert("Login berhasil sebagai Teknisi");
        window.location.href = "dashboard_teknisi.html"; // Redirect ke halaman Teknisi
    } else {
        alert("Username atau password salah");
    }
}
