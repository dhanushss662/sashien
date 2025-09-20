import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventsComponent } from './events/events.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo:'home'},
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component:AboutUsComponent},
    // {path: 'contact-us', component:ContactUsComponent},
    {path: 'events', component:EventsComponent},
    {path: '**', redirectTo: 'home'}
];
