<?php
$id = $_GET['id_photo'];
$sql = "SELECT url_full FROM gallery WHERE id_photo = '$id'";
$url=getResult($sql);
$sql = "SELECT rating FROM gallery WHERE id_photo = '$id'";
$rating = getResult($sql)[0]['rating'];
$rating++;
$sql = "UPDATE gallery SET rating='$rating' WHERE id_photo = '$id'";
executeQuery($sql);
$sql = "SELECT rating FROM gallery WHERE id_photo = '$id'";
$rating = getResult($sql)[0]['rating'];

echo '<img src="'. $url[0]['url_full'] . '">';
echo '<br>Количество просмотров: ' . $rating;

?>
