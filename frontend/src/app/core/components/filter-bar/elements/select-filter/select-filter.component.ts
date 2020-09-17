import { Component, OnInit } from '@angular/core';
import {BaseService} from '@app/shared/services/Base.service';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss']
})
export class SelectFilterComponent implements OnInit {

  constructor(
    private baseServices: BaseService,
  ) { }

  ngOnInit(): void {
  }
  roleChange(val: string): void {
    this.baseServices.setSelectedRole(val);
  }

}
