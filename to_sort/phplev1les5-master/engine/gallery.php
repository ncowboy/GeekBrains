<?php

include_once('../engine/resize.php');
include_once('../engine/function.php');

define("TAG_OPEN", '<tr class="gallery_item"><td>');
define("THEAD", '<thead><tr><td>№</td><td></td><td>Описание</td><td>Добавлено</td><td>Популярность</td></tr></thead>');
define("TD", "</td><td>");
define("HREF_OPEN", "<a target=_blank href=photo.php?id_photo=");
define("IMG_OPEN", '><img title="увеличить" src="');
define("TAGS_CLOSE", '</td></tr>');
define("MAX_SIZE", 7340032);
define("GALLERY_EMPTY", "Выберите файл для загрузки. Доступные форматы: jpg, gif, png объемом не более 7 мб <br>");
define("SUCEED", "Файл загружен <br>");
define("DEL", "Изображения удалены <br>");
define("ERROR", "Ошибка загрузки. Доступные форматы: jpg, gif, png, объемом не более 7 мб <br>");


// Задаем переменные
$tmp_dir = $_FILES['myfile']['tmp_name'];
$name = $_FILES['myfile']['name'];
$size = $_FILES['myfile']['size'];
$img_dir = 'img/';
$thumb_dir = 'img/thumbs/';
$thumb_destination = $thumb_dir . translit($name);
$destination = $img_dir . translit($name);
$title = $_POST['mytext'];

// Проверка на тип файла и размер
  if (!empty($_POST['send']) && $size < MAX_SIZE && exif_imagetype($tmp_dir) == (1||2||3) )
  {
    create_thumbnail($tmp_dir, $thumb_destination, 100, 100);
    $sql = "insert INTO gallery (title, url_full, url_thumb, size, date) value ('$title', '$destination', '$thumb_destination', '$size', now())";
    executeQuery($sql);
    move_uploaded_file($tmp_dir, $destination);
    echo SUCEED;
  }

  else if (empty($_FILES)){
    echo GALLERY_EMPTY;
  }

	else if (!empty($_POST['delete']))
	{
		$sql = 'delete from gallery';
		executeQuery($sql);
		echo DEL;
	}

  else {
    echo ERROR;
}

$str = "";
$sql = "SELECT * FROM gallery ORDER BY rating DESC";
$pics = getResult($sql);

for($i = 0; $i < count($pics); $i++) {
$str .= TAG_OPEN . ($i+1) . TD . HREF_OPEN .$pics[$i]['id_photo']. IMG_OPEN;
$str .= $pics[$i]['url_thumb'] . '"></a>' .TD. $pics[$i]['title']. TD . $pics[$i]['date'] . TD . $pics[$i]['rating'] . TAGS_CLOSE;
}



echo "<table>" . THEAD;
echo $str;
echo "</table>";


 ?>
