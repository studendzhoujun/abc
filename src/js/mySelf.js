'use strict';
//author zhoujun
//date   2016/04/12
$('body').css({background:'#111',position:'relative'});
//canvas
$('<p/>',{text:'boom',id:'boom',css:{textAlign:'center',fontSize:'0.5rem',color:'red',marginLeft:'20px',width:'100px',height:'100px',background:'blue',borderRadius:'50px',lineHeight:'100px'}}).appendTo($('body'));
/*var obj=$('#boom').offset().left;
console.log(obj);*/
$('#boom').click(function(){
	var oBoom=$('#boom');
	var flag=false;
	setTimeout(function(){
	    oBoom.animate({marginLeft:'70px',rotateZ:'60deg'});
         flag=true;
		setTimeout(function(){
			if(flag){
				oBoom.animate({opacity:'0'})
				setTimeout(drop,500)
			}
		},500)
	},500);
});
///
$('.text').css({height:'30px',background:'pink',fontSize:'0.4rem'});
var oInput=document.querySelector('.oInput');
oInput.onkeyup=function(){
	var oValue=oInput.value;
	$('.text').html(oValue);
};
function drop(){
	$('.text').animate({translateY:'99px'})
	$('.oInput').animate({translateY:'99px'})	
}

oInput.onkeydown=function(e){
	var oEvent=e||event;
	var keyNum=oEvent.keyCode;
	var oValue=oInput.value;
	if(keyNum==13&&oValue.indexOf('close')!=-1){
		location.reload(true)
	}else if(keyNum==13&&oValue.indexOf('hide')!=-1){
		$('.text').hide();
		$('.oInput').hide();
		$('#boom').hide();
	}
}

//reg
/*var str='121323kasdf';
if(str.match(/[zom]/)){
	console.log('right')
}else{
	console.log('errorerererererererererrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
}*/

////  canvas 
console.log("%cstudentzhoujun"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
console.log('%cstudentzhoujun', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
console.warn('提醒test');
console.error('报错test');
console.info('信息test');
console.log("%cstudentzhoujun","background: rgba(252,234,187,1);background: -moz-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%,rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -webkit-gradient(left top, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(12%, rgba(175,250,77,1)), color-stop(28%, rgba(0,247,49,1)), color-stop(39%, rgba(0,210,247,1)), color-stop(51%, rgba(0,189,247,1)), color-stop(64%, rgba(133,108,217,1)), color-stop(78%, rgba(177,0,247,1)), color-stop(87%, rgba(247,0,189,1)), color-stop(100%, rgba(245,22,52,1)));background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -o-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -ms-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size:5em")
$('#gc').css({background:'#f90',opacity:'0.8'}).attr('abc','123');
var oc=$('#gc')[0];
var gc=oc.getContext('2d');
function drawRect(ox,oy,w,h,color){
	var hh=0;
	var timer=null;
	timer=setInterval(function(){
		hh++;
		if(hh==h){
           clearInterval(timer);
		}
		gc.save();
		gc.fillStyle=color;
		gc.fillRect(ox,oy,w,hh);
		gc.restore();
	},15)
}
function rnd(n,m){
	return parseInt(n+Math.random()*(m-n));
}
var arr=[70,110,300,215,180];
for(var i=0;i<5;i++){
	drawRect(i*70+20,400-arr[i],50,arr[i],'rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')');
}


