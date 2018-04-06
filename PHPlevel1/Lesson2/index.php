<?php 
/*
1. Объявить две целочисленные переменные $a и $b и задать им произвольные начальные
значения. Затем написать скрипт, который работает по следующему принципу:
a. Если $a и $b положительные, вывести их разность.
b. Если $а и $b отрицательные, вывести их произведение.
c. Если $а и $b разных знаков, вывести их сумму.
Ноль можно считать положительным числом.
*/

$a = -3;
$b = 5;

if($a >= 0 && $b >= 0) {
  echo("$a" - "$b");
}else if($a < 0 && $b < 0) {
  echo("$a" * "$b");
}else{
  echo("$a" + "$b");
}

echo '<hr>';

/*
2. Присвоить переменной $а значение в промежутке [0..15]. С помощью оператора
switch организовать вывод чисел от $a до 15.
*/

$a = rand(0,15);
echo 'a равно = ' . "$a" . '<br>';
switch($a) {
  case '0':
    echo '0<br>';
    $a++;
  case '1':
    echo '1<br>';
    $a++;
  case '2':
    echo '2<br>';
    $a++;
  case '3':
    echo '3<br>';
    $a++;
  case '4':
    echo '4<br>';
    $a++;
  case '5':
    echo '5<br>';
    $a++;
  case '6':
    echo '6<br>';
    $a++;
  case '7':
    echo '7<br>';
    $a++;
  case '8':
    echo '8<br>';
    $a++;
  case '9':
    echo '9<br>';
    $a++;
  case '10':
    echo '10<br>';
    $a++;
  case '11':
    echo '11<br>';
    $a++;
  case '12':
    echo '12<br>';
    $a++;
  case '13':
    echo '13<br>';
    $a++;
  case '14':
    echo '14<br>';
    $a++;
  case '15':
    echo '15<br>';
    $a++;
}

echo '<hr>';

/*
3. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
*/

function sum($a, $b) {
  return $a + $b;
}

function subtr($a, $b) {
  return $a - $b;
}

function mult($a, $b) {
  return $a * $b;
}

function div($a, $b) {
  return $a / $b;
}

echo sum(5,10) . '<br>';
echo subtr(5,10) . '<br>';
echo mult(5,10) . '<br>';
echo div(5,10) . '<br>';

echo '<hr>';

/*
4. Реализовать функцию с тремя параметрами: function mathOperation($arg1, $arg2, $operation),
где $arg1, $arg2 – значения аргументов, $operation – строка с названием операции. В
зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
*/

function mathOperation($arg1, $arg2, $operation) {
  switch($operation){
    case 'sum':
      echo sum($arg1, $arg2) . '<br>';
      break;
    case 'subtr':
      echo subtr($arg1, $arg2) . '<br>';
      break;
    case 'mult':
      echo mult($arg1, $arg2) . '<br>';
      break;
    case 'div':
      echo div($arg1, $arg2) . '<br>';
      break;
  }
}

mathOperation(5, 10, 'sum');
mathOperation(5, 10, 'subtr');
mathOperation(5, 10, 'mult');
mathOperation(5, 10, 'div');


























