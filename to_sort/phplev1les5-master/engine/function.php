<?php
include_once('../config/config.php');

function getResult($sql) //Функция получения данных из БД
{
	$db = mysqli_connect(HOST,USER,PASS,DB);
	$result = mysqli_query($db, $sql);
	$array_result = array();

		while ($row = mysqli_fetch_assoc($result))
	{
		$array_result[] = $row;

	}

	mysqli_close($db);

	return $array_result;

}

function executeQuery($sql)
{
	$db = mysqli_connect(HOST, USER, PASS, DB);
	$result = mysqli_query($db, $sql);
	mysqli_close($db);
	return $result;
}

function translit($s) {
  $s = (string) $s;
  $s = strip_tags($s);
  $s = str_replace(array("\n", "\r"), " ", $s);
  $s = preg_replace("/\s+/", ' ', $s);
  $s = trim($s);
  $s = function_exists('mb_strtolower') ? mb_strtolower($s) : strtolower($s);
  $s = strtr($s, array('а'=>'a','б'=>'b','в'=>'v','г'=>'g','д'=>'d','е'=>'e','ё'=>'e','ж'=>'j','з'=>'z','и'=>'i','й'=>'y','к'=>'k','л'=>'l','м'=>'m','н'=>'n','о'=>'o','п'=>'p','р'=>'r','с'=>'s','т'=>'t','у'=>'u','ф'=>'f','х'=>'h','ц'=>'c','ч'=>'ch','ш'=>'sh','щ'=>'shch','ы'=>'y','э'=>'e','ю'=>'yu','я'=>'ya','ъ'=>'','ь'=>''));
  $s = str_replace(" ", "-", $s);
  return $s;
}
?>
