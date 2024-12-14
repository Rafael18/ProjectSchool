import { NgModule } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    MatTabsModule,
    MatIconModule
  ],
  declarations: [],
  providers: [
  ]
})
export class UsersMaterialModule { }
