<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="style.css">
    <title>Домашнее задание к уроку №4 по курсу PHP уровень 1 </title>
  </head>
  <body>
<div id="gallery">
<form action="?" method="post" enctype="multipart/form-data">
  <input type="file" name="myfile"/>
  <input type="submit" value="Отправить файл" name="somefile"/>
</form>
  <?php

include "resize.php" ;
// Задаем константы
define("HREF_OPEN", '<a target="_blank" href="');
define("IMG_OPEN", '"><img src="');
define("TAGS_CLOSE", '"></a>');
define("MAX_SIZE", 7340032);
define("SUCEED", "Файл загружен <br>");
define("ERROR", "Ошибка загрузки. Доступные форматы: jpg, gif, png, объемом не более 7 мб <br>");

// Задаем переменные
$tmp_dir = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
$size = $_FILES['myfile']['size'];
$img_dir = 'img/';
$thumb_dir = 'img/thumbs/';
$thumb_destination = $thumb_dir . $name;
$destination = $img_dir . $name;


// Проверка на нажатие кнопки
if (isset($_POST['somefile'])) {

// Проверка на загрузку файла, размер и тип
  if (checkFile($size, $tmp_dir))
  {
    create_thumbnail($tmp_dir, $thumb_destination, 100, 100);
    move_uploaded_file($tmp_dir, $destination);
    echo SUCEED;
  }
  else {
    echo ERROR;
  }
}

// Вывод галереи
echo gallery_render($thumb_dir, $img_dir);


//Функция проверки
function checkFile($issue1, $issue2) {
if (is_uploaded_file($issue2)) {
    if ($issue1 < MAX_SIZE) {
      switch (exif_imagetype($issue2)) {
        case '1':
        return true;
          break;
        case '2':
          return true;
            break;
        case '3':
          return true;
            break;
        default:
          return false;
          break;
      }
        }
          }
else
      return false;
}

//функция вывода галереи
function gallery_render($path_thumb, $path_img)
{
$pics = scandir($path_thumb);
$string = "";
for ($i = 2; $i < count($pics); $i++ ) {
$string .= HREF_OPEN . $path_img . $pics[$i]. IMG_OPEN . $path_thumb . $pics[$i]. TAGS_CLOSE ;
}
return $string;
}
  ?>

</div>

</body>
</html>
