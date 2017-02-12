setInterval(function(){
	scrollTop=$(document).scrollTop();
	if($(document).scrollTop()>150){
		$(".site-nav-extra").show();
		$(".fixedtool").show();
	}else{
		$(".site-nav-extra").hide();
		$(".fixedtool").hide();
	}
},80);
//搜索框切换Tab卡
$(".search-panel-fields1 .goods-search-tab1 ").click(function(){
	// console.log($(this).index());//输出所点处在兄弟节点中的索引值
	$(".goods-search-tab1").html("宝贝<img src='img/down.png'/>");
	$("#search-tab-tit1").show();
	$("#search-tab-tit1 li").click(function(){
		if(event.target.nodeName == $("#search-tab-tit1 li")[$(this).index()].nodeName){
		$("#search-tab-con1 lable").eq($(this).index()).show().siblings().hide();
		// $("#search-tab-tit1 li").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
		}
		if($(this).index()==0){
			$(".search-imgsearch-panel1").show();
			$("#search-tab-tit1 li")[$(this).index()].html("宝贝<img src='img/down.png'/>");
			$("#search-tab-tit1").hide();
		}else{
			$(".search-imgsearch-panel1").hide();
		}
		if($(this).index()==1){
			$(".search-panel-fields1").addClass("tmao-panel");
			$(".btn-search1").addClass("tmao-btn");
			$(".goods-search-tab1").html("天猫<img src='img/down.png'/>");
			$("#search-tab-tit1").hide();
		}else{
			$(".search-panel-fields1").removeClass("tmao-panel");
			$(".btn-search1").removeClass("tmao-btn");
			$(".goods-search-tab1").html("店铺<img src='img/down.png'/>");
			$("#search-tab-tit1").hide();
		}
	});
});
$("#search-tab-tit1").mouseleave(function(){
	$("#search-tab-tit1").hide();
});

//淘宝输入框（点击、光标出现，默认字消失）
$("#q1").focus(function() { 
	$("#search-tab-con1").hide(); 
	$(".tb-icon1").hide();
}); 
//点击输入框以外的位置，下拉菜单消失且当输入框内无内容时，点击外部，输入框内默认字出现
$("#q1").blur (function() { 
	$(".suppose1").hide();	
　　if ("" == this.value) { 
　　　　$("#search-tab-con1 ").show();
 		$(".tb-icon1").show();
　　} 
}); 
//搜索框，当输入内容，下拉联想菜单出现
$("#q1").keyup(function(){
		$(".suppose1").show();
});


