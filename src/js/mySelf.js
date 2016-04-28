'use strict';
//author zhoujun
//date   2016/04/12
$('body').css({background:'#090'});
//canvas c1
$('#c1').css({width:750,height:200,background:'yellow'});
var oc1=document.querySelector('#c1');
var gc1=oc1.getContext('2d');
function canvasM(parmas){
	var obj=parmas.obj;
	var sX=parmas.sX;
	var sY=parmas.sY;
	var oX=parmas.oX;
	var oY=parmas.oY;
	var width=parmas.width||'1';
	var color=parmas.color||'red';
	obj.save();
	obj.beginPath();
	obj.moveTo(sX,sY);
	obj.lineTo(oX,oY);
	obj.lineWidth=width;
	obj.strokeStyle=color;
	obj.stroke();
	obj.closePath();
	obj.restore();
}
// gc1.save();
// gc1.beginPath();
// gc1.moveTo(20,20);
// gc1.lineTo(100,100);
// gc1.strokeStyle='red';
// gc1.stroke();
// gc1.closePath();
// gc1.restore();
// canvasM({
// 	obj:gc1,
// 	sX:'20',
// 	sY:'20',
// 	oX:'100',
// 	oY:'100',
// 	width:'5',
// 	color:'blue'
// })
//
function canvasArc(parmas){
     var obj=parmas.obj;
     var cX=parmas.cX;
     var cY=parmas.cY;
     var cR=parmas.cR;
     var sA=parmas.sA;
     var oA=parmas.oA;
     var color=parmas.color||'red';
     var dir=parmas.dir||false;
     obj.save();
     obj.beginPath();
     obj.strokeStyle=color;
     obj.arc(cX,cY,cR,sA,oA,dir);
     obj.stroke();
     obj.restore();
 
}
canvasArc({
     obj:gc1,
     cX:'60',
     cY:'40',
     cR:'40',
     sA:'0',
     oA:Math.PI,

})