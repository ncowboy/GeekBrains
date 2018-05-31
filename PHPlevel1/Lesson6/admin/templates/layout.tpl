<?php
if (uriController() == '/admin/catalog/form_validator.php') {
  include_once 'catalog/form_validator.php';
}
if (uriController() == '/admin/catalog/delete') {
  include_once 'catalog/delete.php';
}
?>
<!DOCTYPE html>
<html>
   <head>
      <title>miPoint - интернет-магазин фирменной продукции Xiaomi</title>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="/css/bootstrap.min.css">
      <link rel="stylesheet" href="/css/style.min.css">
      <link rel="stylesheet" type="text/css" href="/css/fileinput.min.css">
      <script src="/js/jquery.min.js" type="text/javascript"></script>
      <script src="/js/bootstrap.min.js" type="text/javascript"></script>
      <script type="text/javascript" src="/js/fileinput.min.js"></script>
   </head>
   <body>
      <div class="wrapper">
         <header>
            <div id="header-top">
               <div id="header-top-content">
                  <div id="logo">
                     <a href="/admin"><img src="/img/logo.png" alt="logo"></a>
                  </div>
                  <nav>
                     <div id="top-menu">
                        <ul>
                           <li><a href="#">Личный кабинет</a> </li>
                           <li><a href="#">Корзина</a> </li>
                           <li><a href="#">Вход</a> </li>
                           <li><a href="#">Регистрация</a> </li>
                        </ul>
                     </div>
                     <hr>
                     <div id="bottom-menu">
                        <ul>
                           <li><a href="/admin/catalog">Каталог</a> </li>
                           <!--<li><a href="/admin/feedback">Отзывы</a> </li>
                           <li><a href="/admin/pages">Страницы</a> </li>-->
                           <li><a href="/">На сайт</a> </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
            <div id="gradient-line"> </div>
         </header>
         <?php
          //var_dump(uriController());
         switch(uriController()){
           case '/admin': include_once ADMIN_ROOT . 'index.php';
             break;
           case '/admin/catalog': include_once 'catalog/index.tpl';
             break;
           case '/admin/catalog/create': include_once 'catalog/create.tpl';
             break;
           case '/admin/catalog/update': include_once 'catalog/update.tpl';
             break;
           case '/delivery': include_once 'delivery.tpl';
             break;
           case '/feedback': include_once 'feedback.tpl';
             break;
           default : include_once TPL_DIR . '/404.tpl';
         }
         ?>
      </div>
      <footer>
           <div id="footer-content">
              <div id="copyright">
                 <strong>&copy; MiPoint.ru</strong>. Разработка сайта <a href="#">Игорь Борисов</a>. Все права защищены
              </div>
              <div id="social-icons-block">
                 <a href="#"></a>
                 <a href="#"></a>
                 <a href="#"></a>
                 <a href="#"></a>
                 <a href="#"></a>
              </div>
           </div>
      </footer>
       <script type="text/javascript">
	$(function(){
		$(".file-input").fileinput({
			showPreview: false,
                        showUpload: false,
                        showRemove: false,
			browseLabel: 'Открыть...',
			msgPlaceholder: 'Выбрать файл...'
			});
		});
     </script>    
   </body>
</html>

