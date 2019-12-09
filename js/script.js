  const div = document.querySelector('#content');
  const button = document.querySelector('button');
  const img = document.querySelector('#pic');
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
 
  let ballArray = ["ball1_8.png","ball1_9.png","ball1_8.png","ball1_9.png"];
  let StarTop = ["ball1_star.png"];
  let inc = 0;


  function countBalls(e){

  var elem_left = e.currentTarget.offsetLeft;
  var elem_top = e.currentTarget.offsetTop;

  var Xinner = (e.pageX - elem_left)-30;
  var Yinner = (e.pageY - elem_top) -130;

   
  let elem = {
    Xinner: Xinner,
    Yinner: Yinner,
  };
  if(e.currentTarget.id === 'starPlace') {
    if( inc > StarTop.length - 1){
      return($('#content').append('<p class="pic">С новым Годом!</p>'))

    } 

    inc = 0
    elem.id = inc;
    // elem.destination = '.starPlace';
    itemsArray.push(elem);

    $(e.currentTarget).append('<img class="pic" style="top:' + Yinner+ 'px; left: ' + Xinner + 'px;" src="' + StarTop[inc] + '" alt="шарик"/>');
  } else {
    if( inc > ballArray.length - 1){
      inc = 0;
    }

    // elem.destination  = place = () => {
    //   if( e.currentTarget.id === 'ballPlace') {
    //     place = '.ballPlace';
    //   }else{
    //     place = '.ballPlaceTop';
    //   }
    // };
    elem.id = inc;
    itemsArray.push(elem);


    $( e.currentTarget).append('<img class="pic" style="top:' + Yinner+ 'px; left: ' + Xinner + 'px;" src="' + ballArray[inc] + '" alt="шарик"/>');
  }
     inc++

     localStorage.setItem('items', JSON.stringify(itemsArray));

}
const data = JSON.parse(localStorage.getItem('items'));


const getLastBalls = (elem) =>{
  $('.ballPlace').append ('<img class="pic" style="top:' + elem.Yinner+ 'px; left: ' + elem.Xinner + 'px;" src="' + ballArray[elem.id] + '" alt="шарик"/>');
}

data.forEach( elem => { 
  getLastBalls(elem)

})
// button.addEventListener('onClick', function(e){
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   elem = "";
// })

console.log(localStorage);

button.addEventListener('click', function () {
  localStorage.clear();
  $(".pic").remove(); 
  itemsArray = [];

});