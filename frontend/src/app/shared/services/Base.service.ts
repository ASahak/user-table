import {Injectable} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Common} from '@app/core/enums';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public $pageCount: number = Common.pageCount;
  public $currentPage: string | number = Common.currentPage;
  public activePage: Subject<string | number> = new Subject();
  private willUpdateRow: Subject<string> = new Subject();
  private pagesCount: Subject<string> = new Subject();
  private searchedName: Subject<string> = new Subject();
  private selectedRole: Subject<string> = new Subject();
  constructor() {}
  // Watch for Updated Rows
  public getSubjectWillUpdateRow(): Observable < any > {
    return this.willUpdateRow.asObservable();
  }
  public setWillUpdateRow(val: any): void {
    this.willUpdateRow.next(val);
  }

  // Watch for Page Count
  public getSubjectPagesCount(): Observable < any > {
    return this.pagesCount.asObservable();
  }
  public setPagesCount(val: any): void {
    this.pagesCount.next(val);
  }

  // Watch for active Page
  public getSubjectActivePage(): Observable < any > {
    return this.activePage.asObservable();
  }
  public setActivePage(val: any): void {
    this.$currentPage = val;
    this.activePage.next(val);
  }

  // Watch for Selected Role
  public getSubjectSelectedRole(): Observable < any > {
    return this.selectedRole.asObservable();
  }
  public setSelectedRole(val: any): void {
    this.selectedRole.next(val);
  }

  // Watch for Searched name
  public getSubjectSearchedName(): Observable < any > {
    return this.searchedName.asObservable();
  }
  public setSearchedName(val: any): void {
    this.searchedName.next(val);
  }
}
