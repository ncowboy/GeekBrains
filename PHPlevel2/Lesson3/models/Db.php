<?php

namespace models;

class Db {

public static function connect(){
  $connect = mysqli_connect(HOST, USER, PASS, DB) 
    or die('Ошибка соединения с базой данных: ' . mysqli_connect_error());
  return $connect;
  }
}