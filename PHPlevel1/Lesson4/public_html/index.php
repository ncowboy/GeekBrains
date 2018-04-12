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
  <script type="text/javascript" src="<?=WEBROOT . 'js/'?>jquery.min.js"></script>
  <script type="text/javascript" src="<?=WEBROOT . 'js/'?>bootstrap.min.js"></script>
</head>
  <body>
	<div class="container">
      <h2>Галерея</h2>
	  <?=galleryRender(WEBROOT . 'img/');?>
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
  </body>
</html>
