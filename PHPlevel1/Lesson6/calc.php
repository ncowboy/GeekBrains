<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Калькулятор</title>
  <link rel="stylesheet" type="text/css" href="public_html/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="public_html/css/style.css">
  <script type="text/javascript" src="public_html/js/jquery.min.js"></script>
  <script type="text/javascript" src="public_html/js/bootstrap.min.js"></script>
	  <?php 
		/*echo "<pre>";
		print_r($_POST);
		echo "</pre>";*/

		$num1 = (int)strip_tags($_POST[num1]);
		$num2 = (int)strip_tags($_POST[num2]);
		$op = $_POST[operation];
		$res = '';

		switch($op){
			case "Сложить" :
			 $res = $num1 + $num2;
			 break;
			case "Вычесть":
			 $res = $num1 - $num2;
			 break;
			case "Умножить":
			 $res = $num1 * $num2;
			 break; 
			case "Разделить":
			 $res = $num1 / $num2;
			 break; 
		}
	?>
</head>
  <body>
    <div class="container">
		<form name="form" method="POST">
		  <div class="form-group form-inline">
			<input type="text" class="form-control" name="num1" placeholder="Введите число">
			<input type="text" class="form-control" name="num2" placeholder="Введите число">
		  </div>
		  <div class="form-group" style="width: 300px">
		    <label for="operation">Выберите операцию</label>
		    <select id="operation" class="form-control" name="operation"> 
			  <option>Сложить</option>
			  <option>Вычесть</option>
			  <option>Умножить</option>
			  <option>Разделить</option>
		    </select>
		  </div>
		  <button type="submit" class="btn btn-default">Посчитать</button>
		  <span>результат: <?=$res?></span>
		</form>
    </div>
  </body>
</html>

