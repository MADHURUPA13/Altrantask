import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  gettingdata: any;
  postdata: any;
  emailList = [];
  emailListObject = [];
  selectedEmailName: any;
  gettingpostdata: any;
  countryNAME: any;
  statearrayyyyy;
  emaildata: any;
  count: any = 0;
  checkedobj: any;
  checkedobj1: any;
  checkedobj2: any;
  countryjsondata: any;
  statearray: any;
  countryslistt = [];
  constructor(private ser: ServicesService, private frm: FormBuilder) {

  }
  ngOnInit() {
    this.getemaildata();
    this.getcountrys();
  }

  getemaildata() {
    this.ser.Emaildata().subscribe(resp => {
      this.gettingdata = resp;
      // tslint:disable-next-line:align
    });
  }

  onChangeEmail(event, data) {
    const checked = event.target.checked;
    this.checkedobj1 = checked;
    if (this.checkedobj1 === true) {
      this.emailList.push(data);
    } else {
      this.emailList.pop();
    }
  }

  selectallfun(event) {
    const checked = event.target.checked;
    this.checkedobj = checked;
    for (let i = 0; i < this.gettingdata.length; i++) {
      if (i <= this.gettingdata.length) {
        // tslint:disable-next-line:prefer-for-of
        this.gettingdata[i].flag = checked;
      }
    }
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.gettingdata.length; i++) {
      if (this.gettingdata[i].flag === true) {
        this.emailList.push(this.gettingdata[i]);
      }
    }
  }

  Savecheckeddata() {
    this.emailListObject = [];
    this.count = 0;
    // tslint:disable-next-line:prefer-for-of
    // tslint:disable-next-line:align
    for (let i = 0; i < this.emailList.length; i++) {
      if (this.count < 10) {
        this.emailListObject.push(this.emailList[i]);
        this.count++;
      } else {
        alert('Data is reached');
        this.emailListObject = [];
        break;
      }
    }
  }

  getcountrys() {
    this.ser.countryslist().subscribe(resp => {
      this.countryjsondata = resp;
    });
  }
  selectedCountry(event) {
    this.checkedobj2 = event;
    for (let i = 0; i <= this.countryjsondata.length; i++) {
      if (this.countryjsondata[i].id === event) {
        this.statearrayyyyy = this.countryjsondata[i].statedata;
        break;
      }
    }
  }
}
