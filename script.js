// Ambil elemen gambar
const minecraftIcon = document.getElementById('minecraftIcon');

// Saat disentuh, ganti gambar
minecraftIcon.addEventListener('mouseenter', function() {
    minecraftIcon.src = 'icon mc2.jpg'; // Ganti dengan link gambar baru
});

// Saat pointer keluar, kembalikan gambar awal
minecraftIcon.addEventListener('mouseleave', function() {
    minecraftIcon.src = 'mc cover.jpg'; // Ganti dengan gambar awal
});
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
