import CodeMirror from "./codemirror";

type ExtendedConfig = CodeMirror.EditorConfiguration & {
  matchBrackets: boolean,
  styleSelectedText: boolean,
  autoCloseBrackets: boolean
}

const config: ExtendedConfig = {
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
  keyMap: "sublime",
  extraKeys: {
    "Ctrl-Enter": () => {
      this.run();
    },
    "Ctrl-S": () => {
      this.clear();
      this.run();
    }
  }
}

class Editor {
  private editor: CodeMirror.EditorFromTextArea;
  constructor (editorElt: HTMLTextAreaElement) {
    this.editor = CodeMirror.fromTextArea(
      editorElt,
      config
    )
  }

  refresh() {
    this.editor.refresh();
  }

  clear(){

  }

  run(){

  }
}

const editorContainer = <HTMLTextAreaElement> document.getElementById("cm-typescript")
editorContainer.value = require("!!raw!./demo/Apple.ts")
module.exports = new Editor(editorContainer)
