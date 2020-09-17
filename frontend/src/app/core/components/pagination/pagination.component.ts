import { Component, OnInit } from '@angular/core';
import {BaseService} from '@app/shared/services/Base.service';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public pages: number | any = 0;
  public activePage: number | any | bigint = 1;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private baseServices: BaseService,
  ) {
    this.baseServices.getSubjectPagesCount().subscribe(count => this.pages = count);
  }
  ngOnInit(): void {
    // Need to listen router change for getting the first query's value
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Subscribe for more changes
          this.activatedRoute.queryParams.subscribe(params => {
            if (/^\d+$/.test(params.page)) {
              this.activePage = params.page;
            } else {
              this.activePage = 1;
              this.router.navigate(
                ['/home'],
                {
                  relativeTo: this.activatedRoute,
                  queryParams: {page: this.activePage},
                });
            }
            this.baseServices.setActivePage(this.activePage || 1);
          });
        }
      });
  }
  goToPage(page: number | string): void { // Pagination click
    this.activePage = page;
    this.baseServices.setActivePage(this.activePage);
    this.router.navigate(
      ['/home'],
      {
        relativeTo: this.activatedRoute,
        queryParams: {page: this.activePage},
      });
  }
}
