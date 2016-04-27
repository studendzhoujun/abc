'use strict';
//author zhoujun
//date   2016/04/12
$('body').css({background:'#090'});

//canvas c1

//canvas c1
$('#c1').css({width:750,height:200,background:'yellow'});
var oc1=document.querySelector('#c1');
var gc1=oc1.getContext('2d');
gc1.moveTo(20,20);
gc1.lineTo(100,100);
gc1.strokeStyle='red';
gc1.stroke();

