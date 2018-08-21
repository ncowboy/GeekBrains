<div class="container">
  <h2>Галерея</h2>
    <div class="row">
      {% for item in images %}
       <div class="image col-md-3">
         <a target="_blank" href="image?id={{item.id}}">
           <img class="img img-thumbnail" src="{{img_tb}}{{item.thumb_name}}"></a>
         <div>Количество просмотров: <span class="badge">{{item.count}}</span>
       </div>
      </div>
      {% endfor %} 
    </div>
  <form class="form-inline" role="form" enctype="multipart/form-data" method="post">
    <div class="form-group">
      <input type="file" name="file" id="file" >
      <p class="help-block">{{ uploadStatus }}</p>
    </div>
  </form>
</div> 
