// Date du jour automatique
document.addEventListener('DOMContentLoaded', function () {
    var dateInput = document.getElementById('start');
    var currentDate = new Date().toISOString().split('T')[0];
    dateInput.value = currentDate;
});
// Affichage message de réservation
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('reservation-form');
    var dateInput = document.getElementById('start');
    var messageElement = document.getElementById('reservation-message');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var selectedDate = new Date(dateInput.value);
        var day = selectedDate.getDate();
        var month = selectedDate.getMonth() + 1; // Les mois commencent à 0
        var year = selectedDate.getFullYear();
        messageElement.textContent = "Vous avez réservé pour le : " + day + "/" + month + "/" + year;
        messageElement.style.display = 'block';
    });
});

