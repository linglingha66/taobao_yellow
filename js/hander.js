$("#fixedtool a").mouseover(function(){
    $("#fixedtool a").eq($(this).index()).addClass("on").siblings().removeClass("on");
    $(".fixedtool-1").addClass("on");
});
$("#fixedtool a").mouseleave(function(){
	$(".fixedtool a").removeClass("on");
    $(".fixedtool-1").addClass("on");
});