import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import 'rxjs/Rx'; // load the full rxjs

@Component({
	moduleId: module.id,
	selector: 'qt-index',
	template: `
    <nav>
      <a routerLink="/editor">Editor</a>
    </nav>
  `,
	directives: [ROUTER_DIRECTIVES],
})
export class IndexComponent {}
