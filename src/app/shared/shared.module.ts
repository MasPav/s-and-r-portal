import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ContentAnimateDirective } from './directives/content-animate.directive';
import { FeatherIconDirective } from './directives/feather-icon.directive';
@NgModule({
  declarations: [ContentAnimateDirective, FeatherIconDirective],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    PerfectScrollbarModule,
    FeatherIconDirective,
    ContentAnimateDirective
  ],
  providers: []
})
export class SharedModule { }
