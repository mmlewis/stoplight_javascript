var stopLight = {
    stopLightColor:"",
    setColor:function(color){
        stopLight.stopLightColor = color;

    },
    applyColor:function (){$('#green').css("background-color",stopLight.stopLightColor)}
}

$(function(){

    stopLight.setColor('green');
    stopLight.applyColor();

});

