import { Component, OnInit, OnDestroy } from '@angular/core';
import {DialogRef} from '@app/shared/components/dialog/dialog-ref';
import {DialogConfig} from '@app/shared/components/dialog/dialog-config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '@app/shared/services/form-validation.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import {BaseService} from '@app/shared/services/Base.service';

@Component({
  selector: 'app-add-edit-row',
  templateUrl: './add-edit-row.component.html',
  styleUrls: ['./add-edit-row.component.scss']
})
export class AddEditRowComponent implements OnInit, OnDestroy {
  public addEditRowForm: FormGroup;
  private addUserObservable: Subscription | undefined;
  constructor(
    private baseServices: BaseService,
    public config: DialogConfig,
    private dialog: DialogRef,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
  ) {
    this.addEditRowForm = this.formBuilder.group({
      email: [{value: this.config.data.rowData?.email || '', disabled: false}, [Validators.required, ValidationService.emailValidator]],
      fname: [{value: this.config.data.rowData?.fname || '', disabled: false}, Validators.required],
      lname: [{value: this.config.data.rowData?.lname || '', disabled: false}, Validators.required],
      role: [{value: this.config.data.rowData?.role || '', disabled: false}, Validators.required],
    });
  }


  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.addUserObservable?.unsubscribe();
  }
  onClose(): void {
    this.dialog.close();
  }
  async save(): Promise<any> {
    if (this.config.data.rowData) { // Edit
      this.http.put<any>('/api/users/edit', {
        ...this.addEditRowForm.value,
        _id: this.config.data.rowData,
      }).subscribe(res => {
        this.toastr.success(res.message);
        this.onClose();
        this.baseServices.setWillUpdateRow(res.user);
      }, err => {
        this.toastr.error(err.message);
      });
    } else { // Add
      const self = this;
      const sendAdding = new Observable((observer) => {
        this.http.post<any>('/api/users/add', this.addEditRowForm.value).subscribe(res => {
          if (!res.status && res.error) {
            observer.error(res.error);
          } else {
            observer.next(res.message);
          }
        });
      });
      this.addUserObservable = sendAdding.subscribe({
        next(msg: any): void {
          self.toastr.success(msg);
          self.onClose();
          // Set Automatically re-render
          self.baseServices.setActivePage(self.baseServices.$currentPage);
        },
        error(msg): void {
          self.toastr.error(msg);
        }
      });
    }
  }
}
