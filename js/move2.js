$(function () {
        var wrap2 = $('#wrap2');
        var list2 = $('#list2');
        var circle2 = $('#circle2 span');
        var prev2 = $('#prev2');
        var next2 = $('#next2');
      	var index = 1;
		var animated = false;
		var timer;

	//按钮显示
	function showButton(){
		circle2.eq(index-1).addClass('on').siblings().removeClass('on');
	}
	//轮播效果
	function animate(offset){
		animated = true;
		// $('#list :animated');
		var newLeft = parseInt(list2.css('left')) + offset;
		var time = 300;//位移总时间
		var interval = 10;//位移间隔时间
		var speed = offset/(time/interval);//每次位移量
		//go函数实现图片缓慢切换的效果
		function go(){
			//判断向左移||向右移时在达到目标值之前进行位移
			if((speed<0 && parseInt(list2.css('left'))>newLeft)|| (speed>0 && parseInt(list2.css('left'))<newLeft)){
				list2.css('left',(parseInt(list2.css('left')) + speed));
				//设置定时器，每隔10m则位移一次
				setTimeout(go,interval);
			}else{//如果达到目标值，则做如下工作
				animated = false;
				list2.css('left',newLeft);
				if(newLeft<-2600){
					list2.css('left', -520);
				}
				if(newLeft>-520){
					list2.css('left',-2600);
				}
			}
		}
		go();
	}
	
	function play(){
		timer = setInterval(function(){
			next2.trigger('click');
		},3000);
	}
	function stop(){
		clearInterval(timer);
	}
	//点击右键
	next2.bind('click', function(){
		if(animated){
			return;
		}
		if(index==circle2.length){
			index=1;
		}else{
			index+=1;
		}
		showButton();
		//如果没在动画（animated==false），则执行切换图片语句,防止在图片动画时切换图片造成网页卡住
		animate(-520);
	});
	//点击左键
	prev2.bind('click', function(){
		if(animated){
			return;
		}
		if(index==1){
			index=circle2.length;
		}else{
			index-=1;
		}
		showButton();
		animate(520);
	});
	//实现点击任意圆点，显示响应图片
	circle2.each(function (){
		$(this).bind('click', function (){
		if(animated){
			return;
		}
		//如果点击的是当前图片的圆点，则不执行后续程序
		if($(this).attr('class')=='on'){
			return;
		}
		//如果点击的不是当前图片的圆点，则执行下列程序
		var myIndex = parseInt($(this).attr('index'));
		var offset = -520*(myIndex-index);
		animate(offset);
		index = myIndex;
		showButton();
		// debugger;//设置断点
	})
	});
	wrap2.hover(stop,play);
	play();
});