import * as ts from 'byots' 

import CodeMirror from "./codemirror"
import { codemirrorConfig } from "./codemirror.config.ts"

import { Host } from './host'

class Editor {
  private cm: CodeMirror.EditorFromTextArea;
  private doc: CodeMirror.Doc;
  private host: Host;
  private fn = '0.ts';
  private service: ts.LanguageService;

  constructor (editorElt: HTMLTextAreaElement) {
    this.cm = CodeMirror.fromTextArea(editorElt, codemirrorConfig)
    this.cm.addKeyMap({
      "Ctrl-S": () => { this.clear(); this.run() },
      "Ctrl-Enter": function () { console.log(arguments) }
    })
    this.host = new Host(this.cm.getValue());
    this.fn = this.host.getFilename();
    this.cm.on('change', (cm) => this.host.update(cm.getValue()))
    this.doc = this.cm.getDoc();

    // Create the language service
    this.service = ts.createLanguageService(this.host);
  }

  refresh() {
    this.cm.refresh();
  }

  clear() {
    
  }

  demoCompletitions(pos: CodeMirror.Position) {
    let offset = this.doc.indexFromPos(pos);
    let completitions = this.service.getCompletionsAtPosition(this.fn, offset);
    console.log(completitions);
  }

  run() {
    let out = this.service.getEmitOutput(this.host.getFilename());

    let pos = this.doc.getCursor();
    if (pos) this.demoCompletitions(pos);
    let outputFile: ts.OutputFile = out.outputFiles.filter((out) => /\.js$/.test(out.name))[0];
    if (outputFile) {
      console.log("Emitting", outputFile)
      eval(outputFile.text);
    } else {
      console.log('No output', out);
    }
  }
}

const editorContainer = <HTMLTextAreaElement> document.getElementById("cm-typescript")
editorContainer.value = require("!!raw!./demo/Apple.ts")
module.exports = new Editor(editorContainer)
