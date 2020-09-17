import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, tap, filter } from 'rxjs/operators';
import {fromEvent } from 'rxjs';
import {BaseService} from '@app/shared/services/Base.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit, AfterViewInit {
  @ViewChild('input') input: ElementRef | undefined;
  constructor(
    private baseServices: BaseService,
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // server-side search
    fromEvent(this.input?.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(400),
        distinctUntilChanged(),
        tap((text) => {
          this.baseServices.setSearchedName(this.input?.nativeElement.value);
        })
      )
      .subscribe();
  }

}
