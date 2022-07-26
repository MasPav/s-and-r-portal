import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Ng-select
import { NgSelectModule } from '@ng-select/ng-select';

// Ngx-chips
import { TagInputModule } from 'ngx-chips';

// Ngx-dropzone-wrapper
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

import { AdvancedFormElementsComponent } from './advanced-form-elements.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { NgxChipsComponent } from './ngx-chips/ngx-chips.component';
import { NgxDropzoneWrapperComponent } from './ngx-dropzone-wrapper/ngx-dropzone-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: AdvancedFormElementsComponent,
    children: [
      {
        path: '',
        redirectTo: 'form-validation',
        pathMatch: 'full'
      },
      {
        path: 'form-validation',
        component: FormValidationComponent
      },
      {
        path: 'ng-select',
        component: NgSelectComponent
      },
      {
        path: 'ngx-chips',
        component: NgxChipsComponent
      },
      {
        path: 'ngx-dropzone-wrapper',
        component: NgxDropzoneWrapperComponent
      },
    ]
  }
]

@NgModule({
  declarations: [AdvancedFormElementsComponent, FormValidationComponent, NgSelectComponent, NgxChipsComponent, NgxDropzoneWrapperComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule, // Ng-select
    TagInputModule, // Ngx-chips
    DropzoneModule, // Ngx-dropzone-wrapper
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }, // Ngx-dropzone-wrapper
  ]
})
export class AdvancedFormElementsModule { }
