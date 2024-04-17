var newJobButton = document.querySelector(".newJobButton");
var modal = document.querySelector(".myModal");
var closeButton = document.querySelector(".close");

newJobButton.onclick = function() {
  modal.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Получаем ссылку на кнопку "Create job"
  var createJobButton = document.querySelector('.buttons button[style="background-color: yellow;"]');

  // Добавляем обработчик события на клик по кнопке "Create job"
  createJobButton.addEventListener('click', function() {
      // Собираем данные из всех полей формы
      var formData = {
          firstName: document.querySelector('.firstName').value,
          lastName: document.querySelector('.lastName').value,
          phoneNumber: document.querySelector('.phoneNumber').value,
          email: document.querySelector('.email').value,
          jobType: document.querySelector('.jobTypeSelect').value,
          jobSource: document.querySelector('.jobTypeSelect2').value,
          jobDescription: document.querySelector('.jobDescription').value,
          address: document.querySelector('.address').value,
          city: document.querySelector('.city').value,
          state: document.querySelector('.state').value,
          zipCode: document.querySelector('.zipCode').value,
          country: document.querySelector('.countrySelect').value,
          date: document.querySelector('.date').value,
          startTime: document.querySelector('select[name="startTime"]').value,
          endTime: document.querySelector('select[name="endTime"]').value,
          select: document.querySelector('.scheduled select').value
      };

      // Отправляем данные на сервер
      fetch('https://javascriptdevelopment.pipedrive.com/deal/15', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          // Обрабатываем ответ от сервера
          console.log('Response from server:', data);
          // Отобразите пользователю результат операции, если необходимо
      })
      .catch(error => {
          console.error('Error:', error);
          // Отобразите сообщение об ошибке пользователю, если необходимо
      });
  });
});
