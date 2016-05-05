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
	}
}

//reg
/*var str='121323kasdf';
if(str.match(/[zom]/)){
	console.log('right')
}else{
	console.log('errorerererererererererrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
}*/