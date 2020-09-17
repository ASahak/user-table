import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterBarComponent } from '@corePath/components/filter-bar/filter-bar.component';
import { SelectFilterComponent } from '@corePath/components/filter-bar/elements/select-filter/select-filter.component';
import { SearchFilterComponent } from '@corePath/components/filter-bar/elements/search-filter/search-filter.component';
import { TableComponent } from './core/components/table/table.component';

// Shared module
import {SharedModule} from './shared/shared.module';
import {DialogModule} from './shared/components/dialog/dialog.module';

// Modals
import { AddEditRowComponent } from './core/components/modals/add-edit-row/add-edit-row.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PaginationComponent } from './core/components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterBarComponent,
    SelectFilterComponent,
    SearchFilterComponent,
    TableComponent,
    AddEditRowComponent,
    PaginationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
