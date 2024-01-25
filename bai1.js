document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var answer = document.getElementById('answer').value;
    var message;
    if (answer.length > 10) {
      message = 'Không hợp lệ';
    } else {
      message = 'Thành công';
    }
    document.getElementById('message').textContent = message;
});