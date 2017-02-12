//公告处悬停tab卡
$("#notice-hd li").mouseover(function(){
	if(event.target.nodeName == $("#notice-hd li")[$(this).index()].nodeName){
		$("#notice-bd div").eq($(this).index()).show().siblings().hide();
		$("#notice-hd li").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
	}
});
$(".market-bd li").mouseover(function(){
	$(".market-float").show();
});
$(".market-bd li").mouseleave(function(){
	$(".market-float").hide();
});
$(".market-float").mouseover(function(){
	$(".market-float").show();
});
$(".market-float").mouseleave(function(){
	$(".market-float").hide();
});