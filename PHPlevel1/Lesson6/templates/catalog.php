<?php 
  $breadCrumbs = [
    ['name' => 'miPoint.ru', 'href' => '/'],
    ['name' => 'Каталог', 'href' => '/catalog']
  ];
  if(isset($_GET[item_id])){
    $item = getCatalogItemFromDb($_GET[item_id]);
    $breadCrumbs[] = [
      'name' => $item[name]
    ];
  }
?>
<main>
  <div id="content-wrapper">
    <div class="container bread-crumbs">
      <ol class="breadcrumb">
        <?php breadCrumbsRender($breadCrumbs);?>
      </ol> 
    </div>
    <?php !isset($_GET[item_id]) ? catalogView() : catalogItemView($_GET[item_id]); ?>
  </div>
</main>