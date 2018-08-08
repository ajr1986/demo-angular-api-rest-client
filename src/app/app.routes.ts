import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClientsComponent } from './components/clients/clients.component';
import { FormComponent } from './components/clients/form.component';



const routes: Routes = [
    { path: 'clients', component: ClientsComponent },
    { path: 'clients/form', component: FormComponent },
    { path: 'clients/form/:id', component: FormComponent },
    { path: '', pathMatch: 'full', redirectTo: 'clients' },
    { path: '**', redirectTo: '/clients' }
];

export const router = RouterModule.forRoot(routes);
