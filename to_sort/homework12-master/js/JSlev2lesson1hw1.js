function Container()
 {
     this.id = "";
     this.className = "";
     this.htmlCode = "";
     this.render = function () {
         return this.htmlCode;
     };
     this.remove = function () {
         this.htmlCode = "";
         return this.htmlCode;
     }
 }

function Menu(elementId, elementClass, items) {
    Container.call(this);
    this.id = elementId;
    this.className = elementClass;
    this.items = items;
    this.render = function () {
        this.htmlCode = '<ul id="' + this.id + '" ' + 'class="' + this.className + '">';
        this.htmlCode += items.map(function (item) {
            return item.render();
        }).join('');
        this.htmlCode += '</ul>';
        return this.htmlCode;
    }
}
function MenuItem(className, title, href) {
    Container.call(this);
    this.title = title;
    this.href = href;
    this.className = className;
    this.render = function () {
        this.htmlCode = '<li class="' + this.className + '">' + '<a href="' + this.href + '">' + this.title + '</a></li>';
        return this.htmlCode;
    };
}

function SubMenu(menu) {
    Menu.call(this);
    this.menu = menu;
    this.render = function () {
        this.htmlCode = menu.render();
        return this.htmlCode;
    }
}

var menuItem1 = new MenuItem('menuItem', 'Каталог', 'catalog.html');
var menuItem2 = new MenuItem('menuItem', 'Доставка', 'delivery.html');
var menuItem3 = new MenuItem('menuItem', 'Контакты', 'contacts.html');

var mainMenu = new Menu('topMenu', 'menu', [menuItem1, menuItem2, menuItem3]);

var div = document.createElement('div');
document.body.appendChild(div);
div.innerHTML = mainMenu.render();
// div.innerHTML = mainMenu.remove();
// div.firstElementChild.firstElementChild.outerHTML = mainMenu.remove();

var subMenuItem1 = new MenuItem('subMenuItem', 'Товар1', 'item1.html');
var subMenuItem2 = new MenuItem('subMenuItem', 'Товар2', 'item2.html');
var subMenuItem3 = new MenuItem('subMenuItem', 'Товар3', 'item3.html');

var catalogSubMenu = new Menu('catSubMenu', 'subMenu', [subMenuItem1, subMenuItem2, subMenuItem3]);
var subMenu = new SubMenu(catalogSubMenu);
div.firstElementChild.firstElementChild.insertAdjacentHTML ('beforeEnd', subMenu.render());





