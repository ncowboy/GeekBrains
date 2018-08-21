<?php

namespace models;

class Router {
  
    public static function getRoute(){
      $uriArr = explode('/', $_SERVER['REQUEST_URI']);
      $requestDelimiter = stripos($uriArr[1], '?');
      if($requestDelimiter) {
       return mb_substr($uriArr[1], 0, $requestDelimiter);
       }else{
         return $uriArr[1];
        }
  }
}
