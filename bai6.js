document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var studentId = document.getElementById('studentId').value;
    var studentName = document.getElementById('studentName').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    console.log('Mã Sinh Viên: ' + studentId);
    console.log('Tên Sinh Viên: ' + studentName);
    console.log('Tuổi: ' + age);
    console.log('Số Điện Thoại: ' + phone);
    console.log('Email: ' + email);
});  