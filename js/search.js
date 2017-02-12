//搜索框切换Tab卡
$("#search-tab-tit li").click(function(){
	// console.log($(this).index());//输出所点处在兄弟节点中的索引值
	if(event.target.nodeName == $("#search-tab-tit li")[$(this).index()].nodeName){
		$("#search-tab-con lable").eq($(this).index()).show().siblings().hide();
		$("#search-tab-tit li").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
	}
	if($(this).index()==0){
		$(".search-imgsearch-panel").show();
	}else{
		$(".search-imgsearch-panel").hide();
	}
	if($(this).index()==1){
		$(".search-panel-fields").addClass("tmao-panel");
		$(".btn-search").addClass("tmao-btn");
	}else{
		$(".search-panel-fields").removeClass("tmao-panel");
		$(".btn-search").removeClass("tmao-btn");
	}
});

$(".qr-close").click(function(){
	$(".qr").hide();
});

//淘宝输入框（点击、光标出现，默认字消失）
$("#q").focus(function() { 
	$("#search-tab-con").hide(); 
	$(".tb-icon").hide();
}); 
//点击输入框以外的位置，下拉菜单消失且当输入框内无内容时，点击外部，输入框内默认字出现
$("#q").blur (function() { 
	$(".suppose").hide();	
　　if ("" == this.value) { 
　　　　$("#search-tab-con ").show();
 		$(".tb-icon").show();
　　} 
}); 
//搜索框，当输入内容，下拉联想菜单出现
$("#q").keyup(function(){
		$(".suppose").show();
});

$(".search-imgsearch-input-icon ,.search-imgsearch-input-icon1").mouseover(function(){
	$(".search-imgsearch-input-icon,.search-imgsearch-input-icon1").attr("src","img/camera_on.png");
});
$(".search-imgsearch-input-icon ,.search-imgsearch-input-icon1").mouseout(function(){
	$(".search-imgsearch-input-icon,.search-imgsearch-input-icon1").attr("src","img/camera.png");
	$(".search-imgsearch-input-icon,.search-imgsearch-input-icon1").attr("type","image");
	$(".search-imgsearch-input-icon,.search-imgsearch-input-icon1").css("opacity","1");
});
$(".search-imgsearch-input-icon ,.search-imgsearch-input-icon1").click(function(){
	$(".search-imgsearch-input-icon,.search-imgsearch-input-icon1").css("opacity","0");
	$(".search-imgsearch-input-icon,.search-imgsearch-input-icon1").attr("type","file");
});