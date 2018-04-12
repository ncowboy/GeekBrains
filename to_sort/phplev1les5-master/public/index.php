<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Домашнее задание к уроку №4 по курсу PHP уровень 1 </title>
  </head>
  <body>
<div id="gallery">
<form action="?" method="post" enctype="multipart/form-data">
<p>Описание</p>
  <p><textarea name="mytext" placeholder="Описание"> </textarea></p>
  <p><input type="file" name="myfile"/></p>
  <p><input type="submit" name = "send" value="Отправить файл"/></p>


  <?php
include_once('../engine/gallery.php');
  ?>

<p><input type="submit" name="delete" value="удалить все"/></p>
</form>
</div>

</body>
</html>
