import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdTestBasic } from './test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
const routes: Routes = [{
	path: '',
	data: {
      title: 'Test',
      urls: [{title: 'Test', url: '/'},{title: 'ngComponent'},{title: 'Test'}]
    },
	component: NgbdTestBasic
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [NgbdTestBasic]
})
export class TestModule { }
