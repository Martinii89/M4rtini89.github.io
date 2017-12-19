var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function myFunction (button) {
    var x = button.id;
    if (x == "all")
    {
    	var elems = document.querySelectorAll("p.placeholder:not(.keep)");
    }else {
    	var elems = document.querySelectorAll("p.placeholder[id='"+x+"']");
    }
    [].forEach.call(elems, function(elem) {
    	elem.innerHTML = dice.roll();
	});
	    
}

var buttons = document.getElementsByTagName('button');
for (var i = 0, len = buttons.length; i < len; i++) {
    buttons[i].onclick = function (){
        myFunction (this);
    }
}

$("p.placeholder").click(function(){
    $(this).toggleClass("keep");
});