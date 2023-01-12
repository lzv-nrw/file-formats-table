/**
 * 
 */
$(document).ready(function() {
	// Filter LZV
	$("button.showValid").click(function() {
		$(".nonValid").fadeTo("slow", 0.2).attr("status", "hiddenNonValid");
		$(".nonValid").toggleClass("hiddenValid");
		$("img.button").css("filter", "none");
		$(".nonValid").css("pointer-events", "none");


	});
	
	// Filter text
	$("button.showText").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.publishing,.word,.presentation").fadeTo("slow", 0.2);
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.publishing,.word,.presentation").addClass("hidden");
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.publishing,.word,.presentation").css("pointer-events", "none");
		$(".text").css("pointer-events", "auto");
		$("div.element[status='hiddenNonValid']").css("pointer-events", "none");
		$("button.showText").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showDoc").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showMedia").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showImage").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showData").css("background-color", "rgb(0 45 86 / 50%)");
		
	});
	
	// Filter document
	$("button.showDoc").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.text").fadeTo("slow", 0.2);
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.text").addClass("hidden");
		$(".container,.audio,.video,.threed,.data,.image,.vector,.gps,.interactive,.text").css("pointer-events", "none");
		$(".word,.publishing,.presentation").css("pointer-events", "auto");
		$("div.element[status='hiddenNonValid']").css("pointer-events", "none");
		$("button.showText").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showDoc").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showMedia").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showImage").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showData").css("background-color", "rgb(0 45 86 / 50%)");
	});
	// Filter multimedia
	$("button.showMedia").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".text,.word,.publishing,.presentation,.container,.threed,.data,.image,.vector,.gps").fadeTo("slow", 0.2);
		$(".text,.word,.publishing,.presentation,.container,.threed,.data,.image,.vector,.gps").addClass("hidden");
		$(".text,.word,.publishing,.presentation,.container,.threed,.data,.image,.vector,.gps").css("pointer-events", "none");
		$(".audio,.video,.interactive").css("pointer-events", "auto");
		$("div.element[status='hiddenNonValid']").css("pointer-events", "none");
		$("button.showText").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showDoc").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showMedia").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showImage").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showData").css("background-color", "rgb(0 45 86 / 50%)");
	});

	// Filter image
	$("button.showImage").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".text,.word,.publishing,.presentation,.container,.audio,.video,.data,.gps,.threed,.interactive").fadeTo("slow", 0.2);
		$(".text,.word,.publishing,.presentation,.container,.audio,.video,.data,.gps,.threed,.interactive").addClass("hidden");
		$(".text,.word,.publishing,.presentation,.container,.audio,.video,.data,.gps,.threed,.interactive").css("pointer-events", "none");
		$(".image,.vector").css("pointer-events", "auto");
		$("div.element[status='hiddenNonValid']").css("pointer-events", "none");
		$("button.showText").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showDoc").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showMedia").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showImage").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showData").css("background-color", "rgb(0 45 86 / 50%)");
	});

	// Filter data
	$("button.showData").click(function() {
		$(".element").removeClass("hidden");
		$("div.element[status!='hiddenNonValid']").fadeTo("slow", 1.0);
		$(".text,.word,.publishing,.presentation,.audio,.video,.image,.vector,.interactive").fadeTo("slow", 0.2);
		$(".text,.word,.publishing,.presentation,.audio,.video,.image,.vector,.interactive").addClass("hidden");
		$(".text,.word,.publishing,.presentation,.audio,.video,.image,.vector,.interactive").css("pointer-events", "none");
		$(".data,.container,.gps,.threed").css("pointer-events", "auto");
		$("div.element[status='hiddenNonValid']").css("pointer-events", "none");
		$("button.showText").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showDoc").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showMedia").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showImage").css("background-color", "rgb(0 45 86 / 50%)");
		$("button.showData").css("background-color", "rgb(0 45 86 / 100%)");

	});

	$("button.resetAll").click(function() {
		// Reset elements
		$(".text,.word,.publishing,.presentation,.container,.audio,.video,.data,.image,.vector,.interactive,.gps,.threed").css("pointer-events", "auto");
		$(".element").removeClass("hiddenValid");
		$(".element").removeClass("hidden");
		$(".element").fadeTo("slow", 1.0);
		$("button.showText").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showDoc").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showMedia").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showImage").css("background-color", "rgb(0 45 86 / 100%)");
		$("button.showData").css("background-color", "rgb(0 45 86 / 100%)");
		$("img.button").css("filter", "brightness(0) invert(1)");
		
		// Reset legend
		$(".focussedElement p.pronom").text("PRONOM-ID");
		$(".focussedElement h1").text("Dateiformat");
		$(".focussedElement p.application").text("Anwendung");
		$(".focussedElement p.stage").text("Format-Lizenz-Nutzung");
		$(".focussedElement p.tiptext").replaceWith("<p class='tiptext'>&#8226; Weitere Angaben <br>&#8226; &hellip; </p>");
		$(".focussedElement p.pronom").css("font-size", "1.2em");	
		$(".focussedElement .pronom").css("font-size", "1.1em");	
		$(".focussedElement p.pronom").css("margin-inline-start", "0em");
		$(".focussedElement h1").css({"font-size": "1.6em" , "padding-top":"20px"});
		$(".focussedElement p.stage").css({"font-size":"0.68em" , "margin-right":"1px", "margin-top":"38px"});
		$(".focussedElement").removeClass("text word publishing presentation image vector audio video interactive data gps threed container nonValid");
		$(".legend").css("background-color", "rgb(153 187 219)");	
		$(".focussedElement").css("opacity", "1");	


	});
	
	
	// Copy element to legend
	$(".element").click(function() {
		$(this).clone().appendTo(".legend");
		$(".focussedElement").remove();
		$(".legend .element").addClass("focussedElement").removeClass("element");
		
	});

});