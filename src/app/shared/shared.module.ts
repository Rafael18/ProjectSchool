import { NgModule } from '@angular/core';
import { ToolbarTitleComponent } from './components/toolbar-title/toolbar-title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ToolbarTitleComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    ToolbarTitleComponent
  ]
})
export class SharedModule { }
