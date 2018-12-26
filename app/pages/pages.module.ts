import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageComponent } from './pages.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from '../pages/shared/sidebar.directive';

import { NavigationComponent } from '../pages/shared/header-navigation/navigation.component';
import { SidebarComponent } from '../pages/shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from '../pages/shared/breadcrumb/breadcrumb.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
       // BrowserModule,
    FormsModule
    ],
    declarations: [
        PageComponent,
        NavigationComponent,
        SidebarComponent,
        BreadcrumbComponent,
        SIDEBAR_TOGGLE_DIRECTIVES, 
        
    ],
  
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ PageComponent ]
})
export class PagesModule { }
