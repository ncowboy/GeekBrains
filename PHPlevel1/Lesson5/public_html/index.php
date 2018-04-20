<?php 
require_once '../config/config.php';
require_once '../functions/main.php'
?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Галерея изображений</title>
  <link rel="stylesheet" type="text/css" href="<?=WEBROOT . 'css/'?>bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="<?=WEBROOT . 'css/'?>style.css">
  <link rel="stylesheet" type="text/css" href="<?=WEBROOT . 'css/'?>fileinput.min.css">
  <script type="text/javascript" src="<?=WEBROOT . 'js/'?>jquery.min.js"></script>
  <script type="text/javascript" src="<?=WEBROOT . 'js/'?>bootstrap.min.js"></script>
  <script type="text/javascript" src="<?=WEBROOT . 'js/'?>fileinput.min.js"></script>
</head>
  <body>
	<div class="container">
      <h2>Галерея</h2>
	  <div class="row"><?=galleryRender(WEBROOT . 'img/');?></div>
	  <form class="form-inline" role="form" enctype="multipart/form-data" method="post">
	    <div class="form-group">
		  <input type="file" name="file" id="file" >
	      <p class="help-block"><?=$_FILES['file']['error']?></p>
        </div>
	  </form>
	</div>
    <div class="modal fade" id="modal">
	  <div class="modal-dialog">
		<div class="modal-content">
		  <div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		  </div>
		<div class="modal-body"></div>
	    </div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->	  
  <script type="text/javascript" src="<?=WEBROOT . 'js/'?>imgFull.js"></script>
  <script type="text/javascript">
	$(function(){
		$("#file").fileinput({
			showPreview: false,
			browseLabel: 'Открыть...',
			removeLabel: 'Отменить',
			uploadLabel: 'Загрузить',
			msgPlaceholder: 'Выбрать файл...'
			});
		});
  </script>  
  </body>
</html>
