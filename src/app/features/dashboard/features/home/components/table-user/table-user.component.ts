import { Component, inject, ViewChild, OnInit, effect } from '@angular/core';
import { DatePipe } from '@angular/common';

import { finalize, tap } from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

import { DISPLAYED_COLUMNS } from '@home/components/table-user/constants';
import { ClickRedirectionDetailDirective } from '@home/components/table-user/directives';
import { TableIndexPipe } from '@home/components/table-user/pipes';
import { englishPaginatorIntl } from '@home/components/table-user/languages';
import { UserService } from '@home/components/table-user/services/user.service';
import { FilterFormService } from '@home/services/filter-form.service';
import { FullAddressPipe, FullNamePipe } from '@home/shared/pipes';
import { Employee } from '@home/shared/interfaces';

@Component({
  selector: 'app-table-user',
  standalone: true,
  imports: [
    DatePipe,
    FullNamePipe,
    TableIndexPipe,
    FullAddressPipe,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ClickRedirectionDetailDirective
  ],
  templateUrl: './table-user.component.html',
  styleUrl: './table-user.component.scss',
  providers: [
    UserService,
    {
      provide: MatPaginatorIntl,
      useFactory: englishPaginatorIntl
    }
  ]
})
export class TableUserComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  private readonly _userService = inject(UserService);
  private readonly _filterFormService = inject(FilterFormService);

  protected isLoading: boolean = true;
  protected hasError: boolean = false;
  protected noRecords: boolean = false;
  protected DISPLAYED_COLUMNS: string[] = DISPLAYED_COLUMNS;
  protected dataSource = new MatTableDataSource<Employee>([]);

  protected onChangeValueFormFilterEffect = effect(() => {
    this.onChangeValueFilterEffect();
  })

  ngOnInit(): void {

    this.onGetListUsers();
    this.onChangeValueFilterPredicate();

  }

  private onGetListUsers(): void {
    this._userService.onGetListUsers()
      .pipe(
        tap((data) => {
          this.dataSource.data = data;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }),
        finalize(() => this.isLoading = false)
      )
      .subscribe();
  }

  private onChangeValueFilterEffect(): void {

    const filterForm = this._filterFormService.filters();

    if (!filterForm.search) {
      this.dataSource.filter = '';
      return;
    }

    this.dataSource.filter = filterForm.search.toLowerCase();

  }

  private onChangeValueFilterPredicate(): void {

    this.dataSource.filterPredicate = (user: Employee, filter: string): boolean => {

      const search: string = filter.toLowerCase();
      const fullName: string = `${user.name.first} ${user.name.last}`.toLowerCase();

      return (
        fullName.includes(search)
      );
    };

  }

}