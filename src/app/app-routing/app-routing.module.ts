import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IcocreateComponent } from '../icocreate/icocreate.component'
import { IntroductionComponent } from '../introduction/introduction.component'
import { IcolistComponent } from '../icolist/icolist.component'

const routes: Routes = [
    {
        path: 'create',
        component: IcocreateComponent,
    },
    {
        path: '',
        component: IntroductionComponent,
        pathMatch: 'full',
        children: [{
          path: '',
          component: IcolistComponent
        }]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
          routes,
          { enableTracing: true } // <-- debugging purposes only)
        )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
