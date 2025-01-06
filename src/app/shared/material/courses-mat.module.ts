import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  exports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  declarations: [],
  providers: [
    {provide: MatPaginatorIntl, useValue: customPaginator()}
  ]
})

export class CoursesMaterialModule {}

function customPaginator(){
  const customPaginatorIntl = new MatPaginatorIntl();
  customPaginatorIntl.itemsPerPageLabel='';
  customPaginatorIntl.nextPageLabel='próxima';
  customPaginatorIntl.previousPageLabel='anterior';

  customPaginatorIntl.getRangeLabel= (page:number, pageSize:number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`
    }

    length = Math.max(length, 0);
    const startIndex = page + pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`
  };

  return customPaginatorIntl;
}
