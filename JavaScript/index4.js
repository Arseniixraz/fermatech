// Получаем элементы
var orderBtn = document.getElementById("orderBtn");
var modal = document.getElementById("orderPopup2");
var closeBtn = document.getElementById("closeBtn2");
var form = document.getElementById("orderForm2");
var confirmationMessage = document.getElementById("confirmationMessage");

// Открытие модального окна при нажатии на кнопку "Заказать"
orderBtn.onclick = function() {
    modal.style.display = "flex"; // Показываем окно
}

// Закрытие модального окна при нажатии на кнопку "Закрыть"
closeBtn.onclick = function() {
    modal.style.display = "none"; // Скрываем окно
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Скрываем окно, если кликнули вне его
    }
}

// Обработка отправки формы
form.onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Скрыть форму
    form.style.display = "none";

    // Показать сообщение о подтверждении
    confirmationMessage.style.display = "block";
}
