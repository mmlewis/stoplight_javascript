var Stoplight = function(init_color) {
    var stoplightObj = {
	color : init_color
    };
    
    stoplightObj.setColor = function(newColor) {
	color = newColor;
    };
    
    stoplightObj.getColor = function() {
	return color;
    };

    return stoplightObj;
};
