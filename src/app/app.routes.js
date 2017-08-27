import { notFoundPage } from './pages/not-found.page.component';
import { tabsPageComponent } from './pages/tabs-page.component';
import { contactsPageComponent } from './pages/contacts-page.component';
import { homePageComponent } from './pages/home-page.component';

export const appRoutes = [
    { path: '', component: homePageComponent },
    { path: 'contacts', component: contactsPageComponent },
    { path: 'tabs', component: tabsPageComponent }, 
    { path: '404', component: notFoundPage }    
];