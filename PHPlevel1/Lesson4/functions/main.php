<?php

/*echo '<pre>';
print_r($_FILES);
echo '</pre>';
*/
define('A_TAG_OPEN', '<a data-toggle="modal" data-target="#modal" href="#"');
define('A_TAG_CLOSE', '</a>');
define('IMG_TAG_OPEN', '<img width="200" class="img img-thumbnail" src="');
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
 
 function filesUpload(){
	 
	 $uploadDir = WEBROOT . 'img/';
	 $uploadFile = $uploadDir . basename($_FILES['file']['name']);
	 $supportedTypes = ['png' => 'image/png', 'jpg' => 'image/jpeg', 'gif' => 'image/gif'];
	 $file = $_FILES['file'];
	 $tmp = $_FILES['file']['tmp_name'];
	 
	 if (isset($file) && !empty($tmp)){
		 if(!array_search(mime_content_type($tmp), $supportedTypes)){
			$_FILES['file']['error'] = 'Неподдерживаемый тип файла. Допускаются формат jpg, png, gif';
	  	   }elseif(move_uploaded_file($tmp, $uploadFile)) {
			    $_FILES['file']['error'] = "Файл успешно загружен.\n";
			    }else{
				  $_FILES['file']['error'] = "Ошибка при загрузке файла";
			    }
	 }elseif(isset($file) && empty($tmp)){
		 $_FILES['file']['error'] = "Файл не выбран";
	 }
  
 }
 