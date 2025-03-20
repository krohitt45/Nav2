let x = document.getElementById('menu');
let menuBtn = document.getElementById('menuicon'); 
let closeBtn = document.getElementById('close');

function openMenu() {
    x.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
}

function closeMenu() {
    x.style.display = "none";
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
}

