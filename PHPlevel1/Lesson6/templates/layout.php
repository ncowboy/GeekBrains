<!DOCTYPE html>
<html>
   <head>
      <title>miPoint - интернет-магазин фирменной продукции Xiaomi</title>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <link rel="stylesheet" href="css/style.min.css">
      <script src="js/jquery.min.js" type="text/javascript"></script>
      <script src="js/bootstrap.min.js" type="text/javascript"></script>
   </head>
   <body>
      <div class="wrapper">
         <header>
            <div id="header-top">
               <div id="header-top-content">
                  <div id="logo">
                     <a href="/"><img src="img/logo.png" alt="logo"></a>
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
                           <li><a href="/">Домой</a> </li>
                           <li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">Каталог<span class="caret"></span> </a>
                             <ul class="dropdown-menu">
                               <li class="sub-menu-item all-items "><a href="/catalog">Все товары</a></li>
                               <li class="sub-menu-item divider"></li>
                               <?php menuCatalogView(); ?>
                             </ul>
                           </li>
                           <li><a href="/delivery">Доставка</a> </li>
                           <li><a href="/feedback">Отзывы</a> </li>
                           <li><a href="/contacts">КОНТАКТЫ</a> </li>
                        </ul>
                     </div>
                     <div class="counter"> (0) </div>
                     <div class="search-cart" id="cart"> <a href="#"></a> </div>
                     <div class="search-cart" id="search"> <a href="#"></a> </div>
                  </nav>
               </div>
            </div>
            <div id="gradient-line"> </div>
              <?php if (uriController()== '') include_once 'slider.php'; ?>
              <?php if (uriController()== 'feedback') include_once 'feedback_form.php'; ?>
         </header>
         <?php
         switch(uriController()){
           case '': include_once WEB_ROOT . 'index.php';
             break;
           case 'catalog': include_once 'catalog.php';
             break;
           case 'delivery': include_once 'delivery.php';
             break;
           case 'feedback': include_once 'feedback.php';
             break;
           default : include_once '404.php';
         }
         ?>
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
      </div>
   </body>
</html>

