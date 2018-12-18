import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdTrainingBasic } from './training.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
const routes: Routes = [{
	path: '',
	data: {
      title: 'Training',
      urls: [{title: 'Training', url: '/'},{title: 'ngComponent'},{title: 'Training'}]
    },
	component: NgbdTrainingBasic
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
      NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [NgbdTrainingBasic]
})
export class TrainingModule { }
