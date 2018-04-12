function Voter (options) {
var elem;
  getElem();
      function getElem(){
        if(!elem)
        render();
        return elem;
      };
    function render() {
      elem = document.createElement('div');
      var down = document.createElement('span');
      var vote = document.createElement('span');
      var up = document.createElement('span');
      elem.className = 'voter';
      down.className = 'down';
      vote.className = 'vote';
      up.className = 'up';
      elem.appendChild(down);
      elem.appendChild(vote);
      elem.appendChild(up);
      down.innerHTML = '<a href="#">-</a>';
      var result = 0;
      vote.innerHTML = result;
      up.innerHTML = '<a href="#">+</a>';
      elem.onclick = function(event) {
         if (event.target.closest('.down') && result > 0)
           counterDown();
           else if (event.target.closest('.up'))
           counterUp();
         }
         function counterUp() {
           result++;
           vote.innerHTML = result;
         }
         function counterDown() {
           result--;
           vote.innerHTML = result;
    }
}
    this.getElem = getElem;
}
var voter = new Voter();
var element = voter.getElem();
document.getElementById('part2').appendChild(element);
