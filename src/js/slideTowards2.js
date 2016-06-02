'use strict';    
   function addEvent(obj,sEv,fn){
      	if(obj.addEventListener){
      		obj.addEventListener(sEv,fn,false)
      	}else{
      		obj.attachEvent('on'+sEv,fn);
      	}
   }
   function slide(obj,fn){
    	var fn=fn||{};
    	var fn1=fn.left;
    	var fn2=fn.right;
    	var fn3=fn.top;
    	var fn4=fn.bottom;
    	addEvent(obj,'touchstart',function(ev){
    	var startX=null;
    	var startY=null;
    	var endX=null;
    	var endY=null;
         startX=ev.touches[0].pageX;
         startY=ev.touches[0].pageY;
      	addEvent(obj,'touchend',function(ev){
                endX=ev.changedTouches[0].pageX;
                endY=ev.changedTouches[0].pageY;
                var disX=startX-endX;
                var disY=startY-endY;
                if(Math.abs(disX)-(Math.abs(disY))>0){
                        if(disX>0){
                        	  fn1&&fn1();
                        }else{
                        	  fn2&&fn2();
                        }
                }else{
                        if(disY>0){
                        	  fn3&&fn3();
                        }else{
                        	  fn4&&fn4();
                        }
                }
      	});
    	});
    }

    //example
    slide(oC,{left:function(){
    	 oC.style.background='blue';
    },top:function(){
    	oC.style.background='#339';
    },right:function(){
    	oC.style.background='black';
    },bottom:function(){
    	oC.style.background='#909';
    }})
