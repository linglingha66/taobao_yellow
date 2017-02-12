$(".often-a1").mouseover(function () {
	$(".often-gray1").show();
});
$(".often-a1").mouseleave(function () {
	$(".often-gray1").hide();
});
$(".often-a2").mouseover(function () {
	$(".often-gray2").show();
});
$(".often-a2").mouseleave(function () {
	$(".often-gray2").hide();
});
$(".fashion-a1").mouseover(function () {
	$(".fashion-gray1").show();
});
$(".fashion-a1").mouseleave(function () {
	$(".fashion-gray1").hide();
});
$(".fashion-a2").mouseover(function () {
	$(".fashion-gray2").show();
});
$(".fashion-a2").mouseleave(function () {
	$(".fashion-gray2").hide();
});
$(".fashion-a3").mouseover(function () {
	$(".fashion-gray3").show();
});
$(".fashion-a3").mouseleave(function () {
	$(".fashion-gray3").hide();
});
$(".fashion-a4").mouseover(function () {
	$(".fashion-gray4").show();
});
$(".fashion-a4").mouseleave(function () {
	$(".fashion-gray4").hide();
});
$(".hotsale-list li").mouseover(function(){
		$(this).find("div").show();
		$(this).children("a").eq(1).show();
		
});
$(".hotsale-list li").mouseleave(function () {
	$(".hotsale-item-more").hide();
	$(".hotsale-list-gray").hide();
});
$(".goods-list a").mouseover(function(){
		$(this).find("strong").css("color","#f40");
		$(this).find(".goods-gray").show();
});
$(".goods-list a").mouseleave(function(){
		$(".goods-list a strong").css("color","#000");
		$(".goods-gray").hide();
});
