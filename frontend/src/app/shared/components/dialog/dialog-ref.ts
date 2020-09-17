import {Observable, Subject} from 'rxjs';

export class DialogRef {
    constructor() {
    }

    private readonly AfterClosed = new Subject<any>();
    afterClosed: Observable<any> = this.AfterClosed.asObservable();

    close(result?: any): any {
        this.AfterClosed.next(result);
    }
}
