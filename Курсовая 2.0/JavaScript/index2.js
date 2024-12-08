function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Закрытие модального окна при клике вне окна
  window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  }
  
  // Обработка отправки формы
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Выводим сообщение после отправки формы
    document.getElementById("responseMessage").textContent = "С вами свяжутся позже!";
    // Закрытие формы через несколько секунд
    setTimeout(function() {
      document.getElementById("myModal").style.display = "none";
    }, 3000);
  });