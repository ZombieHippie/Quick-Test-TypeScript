import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import 'rxjs/Rx'; // load the full rxjs

@Component({
	moduleId: module.id,
	selector: 'qt-editor',
	templateUrl: require('./editor.component.pug'),
	directives: [ROUTER_DIRECTIVES],
	providers: [
		HTTP_PROVIDERS
	]
})
export class EditorComponent {}
