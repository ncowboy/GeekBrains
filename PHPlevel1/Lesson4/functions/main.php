<?php

require_once '../config/config.php';

define('A_TAG_OPEN', '<a data-toggle="modal" data-target="#modal" href="#"');
define('A_TAG_CLOSE', '</a>');
define('IMG_TAG_OPEN', '<img width="200" class="img-thumbnail" src="');
define('IMG_TAG_CLOSE', '">');

 function galleryRender($path){
	if(!is_dir($path)) echo 'Директория не существует';
	$files = scandir($path);
	if (isset($files)){
	  for($i = 2; $i < count($files); $i++){
		$imgUrl = WEBROOT . 'img/' . $files[$i]; 
		  echo A_TAG_OPEN . '>' . IMG_TAG_OPEN . $imgUrl . IMG_TAG_CLOSE . A_TAG_CLOSE;
		}
	}
 }
 