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




const my = new Date();

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './test.component.html'
  ,

  providers: [NgbCarouselConfig, NgbProgressbarConfig]
})


@Injectable({ providedIn: 'root' })
export class NgbdTestBasic {
  // This is for the collapse example
  public isCollapsed = false;




  // this is for the Closeable Alert
  @Input()
  public alerts: Array<IAlert> = [];

  private backup: Array<IAlert>;
  constructor() {
    this.alerts.push({
      id: 1,
      type: 'success',
      message: 'This is an success alert',
    }, {
        id: 2,
        type: 'info',
        message: 'This is an info alert',
      }, {
        id: 3,
        type: 'warning',
        message: 'This is a warning alert',
      }, {
        id: 4,
        type: 'danger',
        message: 'This is a danger alert',
      });
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public reset() {
    this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
  }
  // End the Closeable Alert



  // customize default values of carousels used by this component tree
  interval = 500;
  wrap = true;
  keyboard = true;
  pauseOnHover = true;
  showNavigationArrows = true;
  showNavigationIndicators = true;




  // This is for the  datepicker
  model: NgbDateStruct;
  model2;
  date: { year: number, month: number };

  selectToday() {
    this.model = { year: my.getFullYear(), month: my.getMonth() + 1, day: my.getDate() };
  }



  // customize default values of progress bars used by this component tree
  config: NgbProgressbarConfig
  max = 1000;
  striped = true;
  animated = true;
  type = 'success';


  // This is for Multiple Tabs
  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  };



  // This is for Time Picker
  time = { hour: 13, minute: 30 };
  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  // This is for the seconds
  seconds = true;

  toggleSeconds() {
    this.seconds = !this.seconds;
  }

  // This is for the spinners
  spinners = true;

  toggleSpinners() {
    this.spinners = !this.spinners;
  }

  // This is for the column step
  time2: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

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
