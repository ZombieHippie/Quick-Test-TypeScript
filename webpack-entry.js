const $ = require("jquery");

// Vertical Splitter
require("touch-splitter-jquery/src/touchsplitter.css")
require("touch-splitter-jquery/src/jquery.touchsplitter.js")

require("./src/main");



require("style!./src/editor.scss")

window.Say = function(o){
	console.log.apply(console, arguments)
	$("#info").append(o.toString() + "\n")
}
window.Clear = function(){
	$("#info").html('')
}

setTimeout(function () {
	$("#output-splitter").touchSplit({orientation:"vertical"})
	editor.refresh()
}, 100)
