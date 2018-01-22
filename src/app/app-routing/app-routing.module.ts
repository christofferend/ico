import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IcolistComponent } from '../icolist/icolist.component'

const routes: Routes = [
    {
        path: '',
        component: IcolistComponent,
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
