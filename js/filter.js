/**
 * 
 */
$(document).ready(function() {

	$("button.showValid").click(function() {
		$(".nonValid").fadeTo("slow", 0.2).attr("status", "hiddenNonValid");
		$(".nonValid").toggleClass("hiddenValid");
		$("img.button").css("filter", "none");

	});

	$("button.showText").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.publishing,.word,.presentation").fadeTo("slow", 0.2);
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.publishing,.word,.presentation").addClass("hidden");
		$("button.showText").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showDoc").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showMedia").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showImage").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showData").css("background-color", "rgb(0 45 86 / 50%)");
		
	});

	$("button.showDoc").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.text").fadeTo("slow", 0.2);
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.text").addClass("hidden");
		$("button.showText").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showDoc").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showMedia").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showImage").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showData").css("background-color", "rgb(0 45 86 / 50%)");
	});

	$("button.showMedia").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".text,.word,.publishing,.presentation,.container,.threed,.data,.image,.vector,.gps").fadeTo("slow", 0.2);
		$(".text,.word,.publishing,.presentation,.container,.threed,.data,.image,.vector,.gps").addClass("hidden");
		$("button.showText").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showDoc").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showMedia").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showImage").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showData").css("background-color", "rgb(0 45 86 / 50%)");
	});

	$("button.showImage").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".text,.word,.publishing,.presentation,.container,.audio,.video,.data,.gps,.threed,.interactive").fadeTo("slow", 0.2);
		$(".text,.word,.publishing,.presentation,.container,.audio,.video,.data,.gps,.threed,.interactive").addClass("hidden");
		$("button.showText").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showDoc").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showMedia").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showImage").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showData").css("background-color", "rgb(0 45 86 / 50%)");
	});

	$("button.showData").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".text,.word,.publishing,.presentation,.container,.audio,.video,.image,.vector,.interactive").fadeTo("slow", 0.2);
		$(".text,.word,.publishing,.presentation,.container,.audio,.video,.image,.vector,.interactive").addClass("hidden");
		$("button.showText").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showDoc").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showMedia").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showImage").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showData").css("background-color", "rgb(0 45 86 / 100%)");
	});

	$("button.resetAll").click(function() {
		$(".element").removeClass("hiddenValid");
		$(".element").removeClass("hidden");
		$(".element").fadeTo("slow", 1.0);
		$("button.showText").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showDoc").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showMedia").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showImage").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showData").css("background-color", "rgb(0 45 86 / 100%)");
		$("img.button").css("filter", "brightness(0) invert(1)");
	});

	$(".element").click(function() {
		$(this).clone().appendTo(".legend");
		$(".focussedElement").remove();
		$(".legend .element").addClass("focussedElement").removeClass("element");
		$(".legend").css("background-color", "white");
		$(".legend").css("opacity", "1");
		
	});

});