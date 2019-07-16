import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ContactRoutes } from './contact.routing';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [CommonModule, ContactRoutes, TranslateModule],
  declarations: [ContactComponent],
})
export class ContactModule {}
