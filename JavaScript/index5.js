// Открытие модального окна
function openModal2() {
    document.getElementById('tradein-modal').style.display = 'flex';
}
  // Закрытие модального окна
function closeModal2() {
    document.getElementById('tradein-modal').style.display = 'none';
}
  // Обработка отправки формы
function handleFormSubmit(event) {
    event.preventDefault(); // Отключить стандартную отправку формы
    document.getElementById('tradein-form').style.display = 'none'; // Скрыть форму
    document.getElementById('success-message').style.display = 'block'; // Показать сообщение
}
  // Закрытие модального окна при клике вне контента
window.onclick = function (event) {
    const modal = document.getElementById('tradein-modal');
    if (event.target === modal) {
      closeModal2();
    }
};
  




