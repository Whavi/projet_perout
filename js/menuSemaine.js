function showMenu(dayId) {
    const menu = document.getElementById(dayId);
    menu.style.display = "block";
}

function hideMenu(dayId) {
    const menu = document.getElementById(dayId);
    menu.style.display = "none";
}

// Événements au survol de la souris pour chaque jour de la semaine
document.getElementById("lundi").addEventListener("mouseover", function () {
    showMenu("lundi");
});

document.getElementById("lundi").addEventListener("mouseout", function () {
    hideMenu("lundi");
});

document.getElementById("mardi").addEventListener("mouseover", function () {
    showMenu("mardi");
});

document.getElementById("mardi").addEventListener("mouseout", function () {
    hideMenu("mardi");
});

document.getElementById("mercredi").addEventListener("mouseover", function () {
    showMenu("mercredi");
});

document.getElementById("mercredi").addEventListener("mouseout", function () {
    hideMenu("mercredi");
});

document.getElementById("jeudi").addEventListener("mouseover", function () {
    showMenu("jeudi");
});

document.getElementById("jeudi").addEventListener("mouseout", function () {
    hideMenu("jeudi");
});

document.getElementById("vendredi").addEventListener("mouseover", function () {
    showMenu("vendredi");
});

document.getElementById("vendredi").addEventListener("mouseout", function () {
    hideMenu("vendredi");
});

// Répétez ces événements pour les autres jours de la semaine
