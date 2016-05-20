define('conf/coquetry/st',function(require,exports,module){
     module.exports={
     	test:function(){
     		console.log('hahahahahah');
     	},
     	wxshare:function(title,desc,link,imgUrl){
     		wx.ready(function () {
            wx.hideAllNonBaseMenuItem();//隐藏所以的按钮
            wx.showMenuItems({         //显示需要的按钮
                menuList: ['menuItem:share:timeline','menuItem:share:appMessage','menuItem:favorite','menuItem:openWithSafari','menuItem:copyUrl'] // 要显示的菜单项，所有menu项见附录3
            });
            wx.onMenuShareTimeline({     //分享到朋友圈
                title: title+desc, // 分享标题
                link: link, // 分享链接
                desc: desc, //分享描述
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    //alert('成功分享到朋友圈');
                },
                cancel: function () {
                   // alert('取消分享朋友圈');
                }
            });
            wx.onMenuShareAppMessage({   //分享给朋友
            title:title, // 分享标题
            desc:desc, // 分享描述
            link:link, // 分享链接
            imgUrl:imgUrl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () { 
               // alert('成功分享到朋友');
            },
            cancel: function () { 
                //alert('取消分享给朋友');
            }
           });
            wx.onMenuShareQQ({
             title: title, // 分享标题
             desc: desc, // 分享描述
             link: link, // 分享链接
             imgUrl: imgUrl, // 分享图标
             success: function () { 
                 //alert('成功分享到QQ');
             },
             cancel: function () { 
                 //alert('取消分享到QQ');
             }
          });
        }); 
     	},
     	console:function(str){
     		  var str=str||'gomeplus';
             console.log('%c'+str, 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:2em;');
     	},
     	rnd:function(n,m){
     		return parseInt(n+Math.random()*(m-n))
     	}

     };
});