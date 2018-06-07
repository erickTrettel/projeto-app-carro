$(document).ready(function(){
	$("#btn-search").click(function(){
		$(".box-search, .background-box-search, .search-field").css("display", "block");
		$(".search-field").focus();
	});

	$(".box-search").click(function(){
		$(".box-search, .background-box-search, .search-field").css("display", "none");
	});
});
