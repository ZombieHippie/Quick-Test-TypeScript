import CodeMirror from "./codemirror";

type ExtendedConfig = CodeMirror.EditorConfiguration & {
	matchBrackets: boolean,
	styleSelectedText: boolean,
	autoCloseBrackets: boolean
}

export const codemirrorConfig: ExtendedConfig = {
	matchBrackets: true,
	mode: "text/typescript",
	indentWithTabs: false,
	indentUnit: 2,
	theme: "elegant",
	styleSelectedText: true,
	lineNumbers: true,
	autoCloseBrackets: true,
	showCursorWhenSelecting: true,
	autofocus: true,
	keyMap: "sublime"
}
