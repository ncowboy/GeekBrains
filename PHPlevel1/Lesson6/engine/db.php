<?php
require_once '../config/config.php';

function getCatalogItemsFromDb(){
  $items = [];
  $connect = mysqli_connect(HOST, USER, PASS, DB);
  $sql = "SELECT * FROM items";
  $result = mysqli_query($connect, $sql);
  while($row = mysqli_fetch_assoc($result)){
    $items[] = $row;
  }
  mysqli_close($connect);
  return $items;
}
function getFeedbackItemsFromDb(){
  $items = [];
  $connect = mysqli_connect(HOST, USER, PASS, DB);
  $sql = "SELECT * FROM feedbacks";
  $result = mysqli_query($connect, $sql);
  while($row = mysqli_fetch_assoc($result)){
    $items[] = $row;
  }
  mysqli_close($connect);
  return $items;
}

function getCatalogItemFromDb($id){
  $connect = mysqli_connect(HOST, USER, PASS, DB);
  $sql = "SELECT * FROM items WHERE id=$id";
  $result = mysqli_query($connect, $sql);
  mysqli_close($connect);
  return mysqli_fetch_assoc($result);
}
