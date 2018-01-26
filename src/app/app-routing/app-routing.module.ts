import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IcocreateComponent } from '../icocreate/icocreate.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { IcolistComponent } from '../icolist/icolist.component';
import { IcodetailsComponent } from '../icodetails/icodetails.component';

const routes: Routes = [
    {
        path: 'create',
        component: IcocreateComponent,
    },
    {
        path: 'icodetails',
        component: IcodetailsComponent,
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
          { enableTracing: false } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
