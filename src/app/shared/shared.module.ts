import { NgModule } from '@angular/core';
import { ToolbarTitleComponent } from './components/toolbar-title/toolbar-title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ToolbarTitleComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    ToolbarTitleComponent
  ]
})
export class SharedModule { }
