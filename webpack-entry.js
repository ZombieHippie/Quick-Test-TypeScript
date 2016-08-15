const $ = require("jquery");

// Vertical Splitter
require("touch-splitter-jquery/src/touchsplitter.css")
require("touch-splitter-jquery/src/jquery.touchsplitter.js")

const editor = require("./src/editor");

require("./src/editor.scss")

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
