import { Routes } from '@angular/router';
import { EntryPageComponent } from './pages/entry-page/entry-page.component';
import { MoreInfoComponent } from './pages/more-info/more-info.component';
import { LegoListComponent } from './pages/lego-list/lego-list.component';
import { LegoCreateComponent } from './pages/lego-create/lego-create.component';
export const routes: Routes = [
    {
        path:'',
        component: EntryPageComponent
    },
    {
        path:'info',
        component: MoreInfoComponent
    },
    {
        path:'lego-list',
        component: LegoListComponent
    },
    {
        path:'lego-create',
        component: LegoCreateComponent
    }
];
