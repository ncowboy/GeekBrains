<?php

namespace models;

class Template {
  private $twig;
  private $loader;
  private $template;
  private $data;
  
  public function __construct($template, $data) {
   $this->loader = new \Twig_Loader_Filesystem(TEMPLATES_DIR);
   $this->twig = new \Twig_Environment($this->loader);
   $this->template = $template;
   $this->data = $data; 
  }
  
  public function render(){
    try {
          return $this->twig->render($this->template, $this->data);
        } catch (Twig\Error\Error $e) {
          echo $e->message;
           }
      }
  
}
