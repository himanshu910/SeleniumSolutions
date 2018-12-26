import { Input, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';






@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './training.component.html'
  ,

  providers: [NgbCarouselConfig, NgbProgressbarConfig]
})


@Injectable({ providedIn: 'root' })
export class NgbdTrainingBasic {
  // This is for the collapse example
  public isCollapsed = false;





  // customize default values of carousels used by this component tree
  interval = 100;
  wrap = true;
  keyboard = true;
  pauseOnHover = true;
  showNavigationArrows = true;
  showNavigationIndicators = true;





 


  // This is for Multiple Tabs
  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  };




  // This is for the seconds
  seconds = true;

  toggleSeconds() {
    this.seconds = !this.seconds;
  }




  // This is for the validation
  time3;
  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 12) {
      return { tooEarly: true };
    }
    if (value.hour > 13) {
      return { tooLate: true };
    }

    return null;
  });


}



export interface IAlert {
  id: number;
  type: string;
  message: string;
}
