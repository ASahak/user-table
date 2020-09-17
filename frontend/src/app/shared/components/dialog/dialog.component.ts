import {
    Component,
    Type,
    OnDestroy,
    AfterViewInit,
    ComponentFactoryResolver,
    ComponentRef,
    ViewChild,
    ChangeDetectorRef
} from '@angular/core';
import { InsertionDirective } from '../../directives/insertion.directive';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements AfterViewInit, OnDestroy {
    // tslint:disable-next-line:variable-name
    private readonly _onClose = new Subject<any>();

    public componentRef?: ComponentRef<any>;
    public childComponentType: Type<any> | undefined;
    public onClose = this._onClose.asObservable();

    // add this:
    @ViewChild(InsertionDirective)
    insertionPoint?: InsertionDirective;

    // and this:
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private cd: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
      if (this.childComponentType) {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
      }
    }

    ngOnDestroy(): void {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }

    onOverlayClicked(evt: MouseEvent): void {
        // close the dialog
    }

    onDialogClicked(evt: MouseEvent): void {
        evt.stopPropagation();
    }
    loadChildComponent(componentType: Type<any>): void {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

        const viewContainerRef = this.insertionPoint?.viewContainerRef;
        viewContainerRef?.clear();

        this.componentRef = viewContainerRef?.createComponent(componentFactory);
    }
}
