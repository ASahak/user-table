import {Component, Input, ViewChild, ElementRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '@app/shared/services/form-validation.service';

@Component({
    selector: 'app-control-messages',
    styles: [`
        .error-wrapper {
            font-size: 10px;
            color: red;
            transition: .4s;
        }
    `],
    template: `
        <div #errorWrap *ngIf="errorMessage !== null" class="error-wrapper">{{errorMessage}}</div>
  `
})
export class ControlMessagesComponent {
    @Input() control: any;
    @ViewChild('errorWrap') errorWrap?: ElementRef;
    constructor() {
    }

    get errorMessage(): any {
        for (const propertyName in this.control?.errors) {
            if (
                this.control?.errors.hasOwnProperty(propertyName) &&
                this.control.touched
            ) {
                return ValidationService.getValidatorErrorMessage(
                    propertyName,
                    this.control.errors[propertyName]
                );
            }
        }

        return null;
    }
}
