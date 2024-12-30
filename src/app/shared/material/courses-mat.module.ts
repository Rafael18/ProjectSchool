import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  exports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  declarations: [],
  providers: [
  ]
})
export class CoursesMaterialModule { }
