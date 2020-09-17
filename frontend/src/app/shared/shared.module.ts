import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ControlMessagesComponent} from './components/control-message/control-message.component';

@NgModule({
    declarations: [
        ControlMessagesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        ControlMessagesComponent,
    ],
})
export class SharedModule {
}
