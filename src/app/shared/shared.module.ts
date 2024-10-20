import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LazyImageComponent } from './LazyImage/LazyImage.component';



@NgModule({
  declarations: [
    SidebarComponent,LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,LazyImageComponent
  ]
})
export class SharedModule { }
