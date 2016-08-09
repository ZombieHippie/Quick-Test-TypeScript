import CodeMirror = require("codemirror");
require("codemirror/mode/javascript/javascript.js");
require("codemirror/addon/edit/closebrackets.js");
require("codemirror/addon/selection/mark-selection.js");
require("codemirror/addon/search/searchcursor.js");
require("codemirror/addon/search/match-highlighter.js");
require("codemirror/keymap/sublime.js");

require("codemirror/lib/codemirror.css");
require("codemirror/theme/elegant.css");

export { CodeMirror as default };