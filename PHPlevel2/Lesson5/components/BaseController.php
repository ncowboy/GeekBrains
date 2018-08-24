<?php

namespace components;

use Twig_Loader_Filesystem;
use Twig_Environment;

class BaseController

{ 
  public $viewPath = '../views';
  
  public function render($view, $params = []) {
      $loader = new Twig_Loader_Filesystem($this->viewPath);
      $twig = new Twig_Environment($loader);
      try {
          echo $twig->render($view, $params);
        } catch (Twig\Error\Error $e) {
            echo $e->message;
           }
  }
  
  public function redirect($url){
    try {
      header("Location: /{$url}");
    } catch (Exception $e) {
      echo $e->message;
    }
  }
}