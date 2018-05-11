<?php

echo "<pre>";
print_r($_REQUEST);
echo "</pre>";

function doFeedbackAction($action){
  switch ($action) {
    case 'create': actionCreate();
      break;
    case 'update': actionUpdate();
      break;
    case 'delete': actionDelete();
      break;
    case 'view': actionView();
      break;
  }
}

function actionCreate(){
  if (isset($_POST['feedback'])){
    
  }
}

