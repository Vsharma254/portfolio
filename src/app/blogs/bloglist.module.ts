import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BlogRoutes } from './bloglist.routing';
import { BlogListComponent } from './bloglist.component';

@NgModule({
  imports: [CommonModule, BlogRoutes, TranslateModule],
  declarations: [BlogListComponent],
})
export class BlogListModule {}
