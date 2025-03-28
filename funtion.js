// Login Function
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let message = document.getElementById("message");

            if (username === "admin" && password === "1234") {
                message.style.color = "green";
                message.textContent = "Login berhasil!";

                setTimeout(() => {
                    localStorage.setItem("isLoggedIn", "true");  // Simpan status login
                    window.location.href = "dashboard.html";
                }, 1000);
            } else {
                message.style.color = "red";
                message.textContent = "Username atau password salah!";
            }
        });
    }

    // Cek login di dashboard
    if (window.location.pathname.includes("dashboard.html")) {
        if (localStorage.getItem("isLoggedIn") !== "true") {
            window.location.href = "index.html";
        } else {
            loadData();
        }
    }
});

// Logout Function
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}

// Data Pelanggan Indihome
const pelanggan = [
    { nama: "Budi Santoso", nomor: "1234567890", alamat: "Jakarta" },
    { nama: "Siti Aminah", nomor: "0987654321", alamat: "Bandung" },
    { nama: "Andi Wijaya", nomor: "1122334455", alamat: "Surabaya" },
    { nama: "Dewi Lestari", nomor: "6677889900", alamat: "Yogyakarta" }
];

// Load Data ke Tabel
function loadData() {
    let tableBody = document.getElementById("dataTable");
    pelanggan.forEach((p) => {
        let row = `<tr>
            <td>${p.nama}</td>
            <td>${p.nomor}</td>
            <td>${p.alamat}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Fitur Pencarian
function searchData() {
    let input = document.getElementById("search").value.toLowerCase();
    let tableBody = document.getElementById("dataTable");
    tableBody.innerHTML = "";

    let filteredData = pelanggan.filter(p => p.nomor.includes(input) || p.nama.toLowerCase().includes(input));
    
    filteredData.forEach((p) => {
        let row = `<tr>
            <td>${p.nama}</td>
            <td>${p.nomor}</td>
            <td>${p.alamat}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}
