import { Component, OnInit, OnDestroy } from '@angular/core';
import {DialogService} from '@app/shared/services/dialog.service';
import {Common} from '@corePath/enums';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {BaseService} from '@app/shared/services/Base.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

interface Row {
  _id: string;
  fname: string;
  lname: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  public rows: Array<Row> = [];
  public selectOptions: any = {
    '*': 'All',
    'artist': 'Artist',
    'designer': 'Designer',
    'art-manager': 'Art Manager',
  };
  public role: string = '*';
  public searchValue: string = '';
  private subscriptions: Array<Subscription> = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private baseServices: BaseService,
    private http: HttpClient,
    public dialog: DialogService,
    private toastr: ToastrService,
  ) {
    // Changes of Updated user
    this.subscriptions.push(this.baseServices.getSubjectWillUpdateRow().subscribe((value) => {
      const findCurrentIndex = this.rows.findIndex(e => e._id === value._id);
      if (value && findCurrentIndex > -1) {
        this.rows[findCurrentIndex] = value;
      }
    }));
    // Changes of Active Page
    this.subscriptions.push(this.baseServices.getSubjectActivePage().subscribe(val => {
      this.getMainData(val, this.role, this.searchValue);
    }));

    // Changes of Selected Role
    this.subscriptions.push(this.baseServices.getSubjectSelectedRole().subscribe(role => {
      this.role = role;
      this.goToPage(1);
      this.getMainData(1, role, this.searchValue);
    }));

    // Changes of Selected Role
    this.subscriptions.push(this.baseServices.getSubjectSearchedName().subscribe(name => {
      this.searchValue = name;
      this.goToPage(1);
      this.getMainData(1, this.role, name);
    }));
  }

  ngOnInit(): void {
  }
  private getMainData(page: any, role: string, name: string): void {
    this.http.get<any>('/api/users/getAll', {
      params: {
        name,
        role,
        page,
        pageCount: this.baseServices.$pageCount.toString()
      }
    }).subscribe(res => {
      this.baseServices.setPagesCount(Math.ceil(res.usersCount / this.baseServices.$pageCount));
      this.rows = res.users;
    }, err => {
      this.toastr.error(err.message);
    });
  }
  public getRole(key: string): string { // Get Role via indexed string
    return this.selectOptions[key];
  }
  public removeRow(item: Row): void {
    this.http.delete<any>('/api/users/delete', {
      params: {
        id: item._id
      }
    }).subscribe(res => {
      this.toastr.success(res.message);
      // Set Automatically re-render
      let page = this.baseServices.$currentPage;
      if (+page > Math.ceil(+res.userCount / this.baseServices.$pageCount)) {
        page = +this.baseServices.$currentPage - 1;
        this.goToPage(page);
      }
      this.baseServices.setActivePage(page);
    }, err => {
      this.toastr.error(err.message);
    });
  }
  private goToPage(page: any): void {
    this.router.navigate(
      ['/home'],
      {
        relativeTo: this.activatedRoute,
        queryParams: {page},
      });
  }
  public editRow(item: Row): void {
    this.openDialog('edit', 'Edit Row', item);
  }
  openDialog(typeDialog: string, modalTitle: string, dataRow?: Row): void {
    const path = 'core/components/modals/add-edit-row/add-edit-row.component.ts';
    import('../../../' + path).then(module => {
      this.dialog.open(module[Common.modalClass], {
        data: {
          title: modalTitle,
          rowData: dataRow,
        },
      });
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.map(sub => sub.unsubscribe());
  }
}
