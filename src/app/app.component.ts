/**
 * Angular 2 decorators and services
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {AppState} from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.component.scss'
    ],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

    public name = 'Menu of dishes';

    constructor(public appState: AppState) {
    }

    public ngOnInit() {
    }


}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
