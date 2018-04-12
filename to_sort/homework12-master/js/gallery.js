var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
}
else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.open('GET', 'http://jslev2lesson2/json/gallery.json', true);

xhr.onreadystatechange = function () {
   if(xhr.readyState == 4 && xhr.status == 200) {
       var gallery_json = JSON.parse(xhr.response);
       var image0 = new GalleryItem('galleryImg', gallery_json[0]);
       var image1 = new GalleryItem('galleryImg', gallery_json[1]);
       var image2 = new GalleryItem('galleryImg', gallery_json[2]);
       var image3 = new GalleryItem('galleryImg', gallery_json[3]);
       var gallery = new GalleryContainer('gallery', 'imgGallery', [image0, image1, image2, image3]);
       document.body.insertAdjacentHTML('beforeEnd', gallery.render());
    };
}

function GalleryContainer (elementId, elementClass, items){
    this.id = elementId;
    this.className = elementClass;
    this.items = items;
    this.render = function (){
        var result = '<div id="' + this.id + '" ' + 'class="' + this.className + '">';
        result += items.map(function (item) {
            return item.render();
        }).join('');
        result += '</div>';
        return result;
    }
}

function GalleryItem (elementClass, obj) {
    GalleryContainer.call(this);
    this.className = elementClass;
    this.title = obj.title;
    this.alt = obj.alt;
    this.fullSizeSrc = obj.fullSizeSrc;
    this.thumbSrc = obj.thumbSrc;
    this.render = function () {
        var result = '<div class="' + this.className + '" ' + 'title="' + this.title + '" ' + 'alt="' + this.alt + '">';
        result += '<a href="' + this.fullSizeSrc +'">' + '<img class="' + this.class + '" ' + 'src="' + this.thumbSrc + '">' + '</a></div>';
        return result;
    }
}
xhr.send();

