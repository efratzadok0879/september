import { Routes, RouterModule } from '@angular/router';

import {
    AccountComponent,
    LoginComponent,
    RegisterComponent,
} from './imports';

const appRoutes: Routes = [
  
    {
        path: 'project/myAccount', component: AccountComponent, children:
            [
                { path: 'login', component: LoginComponent},
                { path: 'register', component: RegisterComponent },
            ]
    },
    
];

export const routing = RouterModule.forRoot(appRoutes);