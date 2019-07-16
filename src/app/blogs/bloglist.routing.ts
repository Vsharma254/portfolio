import { BlogListComponent  } from './bloglist.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
    data: {
      meta: {
        title: 'home.title',
        description: 'home.text',
        override: true,
      },
    },
  },
];

export const BlogRoutes = RouterModule.forChild(routes);
