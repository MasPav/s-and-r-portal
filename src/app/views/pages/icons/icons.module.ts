import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IconsComponent } from './icons.component';
import { FeatherComponent } from './feather/feather.component';
import { MdiComponent } from './mdi/mdi.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: IconsComponent,
    children: [
      {
        path: '',
        redirectTo: 'feather-icons',
        pathMatch: 'full'
      },
      {
        path: 'feather-icons',
        component: FeatherComponent
      },
      {
        path: 'mdi-icons',
        component: MdiComponent
      }
    ]
  }
]

@NgModule({
  declarations: [IconsComponent, FeatherComponent, MdiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class IconsModule { }
