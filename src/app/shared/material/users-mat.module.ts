import { NgModule } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatTabsModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [],
  providers: [
  ]
})
export class UsersMaterialModule { }
