import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular-archwizard
import { ArchwizardModule } from 'angular-archwizard';


import { FormElementsComponent } from './form-elements.component';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';
import { WizardComponent } from './wizard/wizard.component';

const routes: Routes = [
  {
    path: '',
    component: FormElementsComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic-elements',
        pathMatch: 'full'
      },
      {
        path: 'basic-elements',
        component: BasicElementsComponent
      },
      {
        path: 'wizard',
        component: WizardComponent
      }
    ]
  }
]

@NgModule({
  declarations: [FormElementsComponent, BasicElementsComponent, WizardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ArchwizardModule, // angular-archwizard
  ]
})
export class FormElementsModule { }
