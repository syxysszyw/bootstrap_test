;(function($){
	$.fn.extend({
		"color":function(value){
				return this.css("color", value);				
		},
		"border":function(value){

		},
		"background":function(value){
			
		}
	});
})(jQuery);


$(document).ready(function(){
	alert($("div").color()+"\n返回字符串，证明此插件可用。")
	alert($("div").color("red")+"\n返回object，证明得到的是jQuery对象。")
})