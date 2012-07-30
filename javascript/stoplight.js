var Stoplight = function(init_color) {
    var stoplightObj = {
	   color : init_color
    };
    
    stoplightObj.setColor = function(element, newColor) {
        element.css('background-color',newColor)
	    color = newColor;
    };
    
    stoplightObj.getColor = function() {
	   return color;
    };

    return stoplightObj;
};

$(function() {
    //$('#green').css('background-color','green');
    var light = Stoplight('green');
    //while (true){
        light.setColor($('#green'),'green');
        setTimeout(function(){light.setColor($('#green'),'green')},4000);
        light.setColor($('#yellow'),'yellow');
        setTimeout(function(){light.setColor($('#yellow'),'gray')},2000);
        light.setColor($('#red'),'red');
        setTimeout(function(){light.setColor($('#yellow'),'gray')},4000);
    //}
});
