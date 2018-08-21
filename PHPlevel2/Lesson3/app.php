<?php

require_once 'config/config.php';

spl_autoload_register(function ($class) { 
  $path = __DIR__ . '\\' . $class . '.php';
  if (file_exists($path)) {
    require_once $path;
   }
});

require __DIR__ . '/vendor/autoload.php';

if (isset($_FILES[file])){
  $file = new models\UploadFile();
  $uploadStatus = $file->upload();
  
  if( $uploadStatus === 'Файл успешно загружен'){
    header("Location: /");
  };
}

$dbImagesModel = new \models\DbImage();
$images = $dbImagesModel->getImages();

if(isset($_GET[id])){
$id = (int)$_GET[id];  
$dbImageModel = new \models\DbImage();
$image = $dbImageModel->getImage($id);
}

$whereAmI = new \models\Router();

$layout = new \models\Template('layout.tpl',[
  'request' => $whereAmI->getRoute(),
  'uploadStatus' => $file->uploadStatus,
  'images' => $images,
  'image' => $image,
  'img_dir' => IMG_DIR,
  'img_tb' => IMG_TB_DIR
  ]);

echo $layout->render();






