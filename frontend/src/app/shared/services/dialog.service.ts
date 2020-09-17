import {
    Injectable,
    ComponentFactoryResolver,
    ApplicationRef,
    Injector,
    EmbeddedViewRef,
    ComponentRef,
    Type
} from '@angular/core';

import {DialogModule} from '@app/shared/components/dialog/dialog.module.ts';
import {DialogComponent} from '@app/shared/components/dialog/dialog.component';
import {DialogConfig} from '@app/shared/components/dialog/dialog-config';
import {DialogInjector} from '@app/shared/components/dialog/dialog-injector';
import {DialogRef} from '@app/shared/components/dialog/dialog-ref';

@Injectable({
    providedIn: DialogModule
})

export class DialogService {

    protected dialogComponentRef: ComponentRef<DialogComponent> | undefined;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {
    }

    private appendDialogComponentToBody(config: DialogConfig): any {
        const map = new WeakMap();
        map.set(DialogConfig, config);

        // add the DialogRef to dependency injection
        const dialogRef = new DialogRef();
        map.set(DialogRef, dialogRef);

        // we want to know when somebody called the close mehtod
        const sub = dialogRef.afterClosed.subscribe(() => {
            // close the dialog
            this.removeDialogComponentFromBody();
            sub.unsubscribe();
        });

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
        const componentRef = componentFactory.create(new DialogInjector(this.injector, map));

        this.appRef.attachView(componentRef.hostView);

        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);

        this.dialogComponentRef = componentRef;

        this.dialogComponentRef.instance.onClose.subscribe(() => {
            this.removeDialogComponentFromBody();
        });

        // return the dialogRef
        return dialogRef;
    }
    private removeDialogComponentFromBody(): any {
      if (this.dialogComponentRef) {
        this.appRef.detachView(this.dialogComponentRef.hostView);
        this.dialogComponentRef.destroy();
      }
    }
    public open(componentType: Type<any>, config: DialogConfig): any {
        const dialogRef = this.appendDialogComponentToBody(config);
        if (this.dialogComponentRef) {
          this.dialogComponentRef.instance.childComponentType = componentType;
        }

        return dialogRef;
    }
}
