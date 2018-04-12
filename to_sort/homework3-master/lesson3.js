
var str = "";

//Напишите регулярное выражение для поиска HTML-цвета, заданного
// как #ABCDEF, то есть # и содержит затем
// 6 шестнадцатеричных символов

str = "my color is #22AedD";
console.log(str.match(/#[0-9A-F]{6}/i));

//Создайте регэксп, который ищет все положительные числа,
// в том числе и с десятичной точкой.
// Например, var str = "1.5 0 12. 123.4."

str = "1.5 0 12. 123.4.";
console.log(str.match(/\d+\.\d+|[1-9]+/g));

// Время может быть в формате часы:минуты или часы-минуты.
// И часы и минуты состоят из двух цифр, например 09:00, 21-30.
// Напишите регулярное выражение для поиска времени

str = "Звонок прозвенит в 08:30 и 10-00";
console.log(str.match(/\d\d\-\d\d|\d\d\:\d\d/g));

//Написать проверку правильности координаты в файле
// инициализации шахматной доски c помощью регулярного
// выражения. Он должен иметь формат вида A6.

isCorrect = function (str) {
var result = str.match(/[A-H][0-8]/i);
    console.log(result != null && str.length == 2 ) ;
};

isCorrect('A5');
isCorrect('a5');
isCorrect('550');
isCorrect('55');
isCorrect('Aa');
isCorrect('a555');
isCorrect('');

var checkForm = document.getElementById('checkForm');

checkForm.addEventListener('click', function() {

function CheckInput(inputId, messageId, length) {
  var input = document.getElementById('email').value;
  this.id = inputId;
  this.messId = messageId;
  this.text = '';
  this.reg = '';
  this.length = length;
  this.input = document.getElementById(this.id).value;
  this.action = function() {
    if (this.reg.test(this.input) && this.input.length <= this.length) {
      document.getElementById(this.messId).innerHTML = '✓';
      document.getElementById(this.messId).style.color = "blue";
  }
    else {
      event.preventDefault();
      document.getElementById(this.messId).innerHTML = this.text;
      document.getElementById(this.messId).style.color = "red";
  }
};

}
var checkPhone = new CheckInput('phone', 'phoneMessage', 16) ;
checkPhone.text = "неверный номер";
checkPhone.reg = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
checkPhone.action();

var checkEmail = new CheckInput('email', 'eMailMessage', 100) ;
checkEmail.reg = /\w+\@\w+\.\w{2,4}/i;
checkEmail.text = 'неверный email';
checkEmail.action();

var checkPassportId = new CheckInput('passportId', 'passportIdMessage', 4) ;
checkPassportId.reg = /\d{4}/;
checkPassportId.text = 'Серия паспорта может состоять только из четырех цифр';
checkPassportId.action();

var checkPassportNumber = new CheckInput('passportNumber', 'passportNumberMessage', 6) ;
checkPassportNumber.reg = /\d{6}/;
checkPassportNumber.text = 'Номер паспорта может состоять только из 6 цифр';
checkPassportNumber.action();

});

document.getElementById('form').onsubmit = function(){
document.getElementById('formSucceded').innerHTML = 'Форма отправлена!';
}
