import * as ts from 'byots' 

export class Host implements ts.LanguageServiceHost {
  constructor(private code: string, private filename = 'cm-typescript.ts', private version = 1) {}
  getFilename(): string { return this.filename; }
  update(code: string) {
    this.code = code;
    this.version += 1;
  }
  getCompilationSettings(): ts.CompilerOptions {
    let options: ts.CompilerOptions = {
        allowJs: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        pretty: ts.DiagnosticStyle.Pretty,
        removeComments: false,
        sourceMap: true,
        inlineSourceMap: true,
        // strictNullChecks: false,
        target: ts.ScriptTarget.ES5
    }
    return options;
  }
  // getNewLine(): string { return '\n'; }
  // getProjectVersion?(): string;
  getScriptFileNames(): string[] { return [this.filename] };
  // getScriptFileNames: () { rootFileNames },
  getScriptVersion (fileName) { if (this.filename === fileName) return this.version.toString(); }
  getScriptSnapshot(fileName) { if (this.filename === fileName) return ts.ScriptSnapshot.fromString(this.code) }
  getCurrentDirectory() { return '/' }
  getDefaultLibFileName(options) { return ts.getDefaultLibFilePath(options) }
  log(message: string) {
    console.log('TS_LOG', message);
  }
  error(message: string) {
    console.log('TS_ERR', message);
  }
}