function Clock(){
var elem;
getElem();
    function getElem(){
      if(!elem)
      render();
      return elem;
    };

    function render() {
      elem = document.createElement('div');
      var timer = document.createElement('div');
      var button = document.createElement('div');
      timer.className = 'timer';
      elem.className = 'clock';
      button.className = 'button';
      elem.appendChild(timer);
      elem.appendChild(button);
      button.innerHTML = '<a href="#">пауза</a>';
      var interval;
      setTimer();

      elem.onclick = function(event) {
         if (event.target.closest('.button')) {
           toggleTimer();
         }
       }
       function setTimer() {
         timer.innerHTML = new Date().toLocaleTimeString();
         interval = window.setInterval(function(){
           timer.innerHTML = new Date().toLocaleTimeString();
          }, 1000);
       }

       function toggleTimer(){
           if (elem.classList.contains('inactive'))
             start();
           else {
             pause();
           }
         };

         function pause(){
           clearInterval(interval);
           elem.querySelector('.button a').innerHTML = 'старт';
           elem.classList.toggle('inactive');
         }

         function start(){
           elem.classList.toggle('inactive');
           elem.querySelector('.button a').innerHTML = 'пауза';
           setTimer();
         }
    }
    this.getElem = getElem;
    }

    var clock = new Clock();
    var elem = clock.getElem();
    document.getElementById('part1').appendChild(elem);
