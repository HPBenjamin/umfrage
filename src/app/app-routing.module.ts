import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogFirstComponent } from './dialog-first/dialog-first.component';
import { DialogSecondComponent } from './dialog-second/dialog-second.component';
import { DialogThirdComponent } from './dialog-third/dialog-third.component';

const routes: Routes = [
  { path: '', component: DialogFirstComponent },
  { path: 'dialog-second', component: DialogSecondComponent },
  { path: 'dialog-third', component: DialogThirdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
