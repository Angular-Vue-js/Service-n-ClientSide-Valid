import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { ConverterComponent }        from './app.converter';
import { FeedbackComponent }        from './app.feedback';

const appRoutes: Routes = [
  { path: 'converter', component: ConverterComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '', redirectTo: '/converter', pathMatch: 'full' },
  { path: '**', component: FeedbackComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
