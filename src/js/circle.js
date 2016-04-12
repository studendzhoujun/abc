'use strict';
//share
   $('.Qz-shareBtn').click(function(){
          $('.window-share').animate({bottom:'0rem'},200);
          $('.window-bg').show();
   });
   $('.change-btn').click(function(){
          $('.window-share').animate({bottom:'-4rem'},200);
          $('.window-bg').hide();
   });
    
   //分享到威信
   $('.window-share li').eq(0).click(function(){
        console.log('分享到微信');
   });
    //分享到朋友
   $('.window-share li').eq(1).click(function(){
        console.log('分享到朋友圈');
    });
   //距下次活动开始的时间
   //var s=2805380;
   //var h=s%86400;
   //console.log(h);
   function toDouble(num){
      return num<10?'0'+num:num;
   }
   setInterval(function(){

   var oDate=new Date();
   //var s=oDate.getTime();
   var h=oDate.getHours();
   var m=oDate.getMinutes();
   var s=oDate.getSeconds();
   var str=toDouble(h)+':'+toDouble(m)+':'+toDouble(s);
   $('.time-over span').html(str);
   },1000);
  //与app的通信;
  //.btn1 提醒
  //.btn2 取消取消提醒
  //.btn4 加入圈子赢好礼
  $('.Qz-foryou').on('click','.for-you-quanziBtn .btn1',function(){
         alert('提醒');
  });
  $('.Qz-foryou').on('click','.for-you-quanziBtn .btn2',function(){
         alert('取消取消提醒');
  });
  $('.Qz-foryou').on('click','.for-you-quanziBtn .btn4',function(){
         alert('加入圈子赢好礼');
  });
  //user-scroll
      var oUl=document.querySelector('ul');
      oUl.innerHTML+=oUl.innerHTML;
      var len=oUl.children.length-1;
      console.log(len)
      var i=1;
      oUl.style.WebkitTransition='1s all ease';
    function move(){
         oUl.style.WebkitTransform='translateY('+(-23*i)+'px)';
           i++;
       // console.log(i+'clientLeft='+oUl.clientLeft)
        if(i==len){
            i=2;
            oUl.style.WebkitTransition='';
            oUl.style.WebkitTransform='translateY(0px)';
            //console.log(oUl.clientLeft+'=1')
            var left = oUl.clientLeft;
            //console.log(oUl.clientLeft+'=2')
            oUl.style.WebkitTransition='1s all ease';
            oUl.style.WebkitTransform='translateY(-23px)';

           }else{
            oUl.style.WebkitTransition='1s all ease';
           }
        }

        setInterval(move,1000);


        //try
       /* $('#try').on('click',function(){
          var attr=$(this).attr('class');
          if(attr=='try'){
               console.log('try');
              $(this).removeClass('try').addClass('try1');
          }else if(attr=='try1'){
               console.log('try1');
               $(this).removeClass('try1').addClass('try');
          }
        });*/
        /*var name=0;
        $('#try').on('click',function(){
            console.log($(this).attr('class'));
            name++;
            $(this).attr('data','name'+name);
        });*/
        $('body').on('click','#try p',function(){
              var _this=$(this);
              var aClass=_this.attr('class');
              if(aClass=='p1'){
                console.log('这是一个p1');
              }else if(aClass=='p2'){
                console.log('这是一个p2');
              }else if(aClass=='p3'){
                console.log('这是一个p3');
              }
        });
