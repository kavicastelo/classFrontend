import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'classFrontend';

  nbtnStyle: boolean;
  ebtnStyle: boolean;
  cbtnStyle: boolean;
  rbtnStyle: boolean;
  sbtnStyle: boolean;

  constructor() {
    this. nbtnStyle = false;
    this. ebtnStyle = false;
    this. cbtnStyle = false;
    this. rbtnStyle = false;
    this. sbtnStyle = false;
  }
  nsubmit():Boolean {
    return this.nbtnStyle = true;
  }

  esubmit():Boolean {
    return this.ebtnStyle = true;
  }

  csubmit():Boolean {
    return this.cbtnStyle = true;
  }

  rsubmit():Boolean {
    return this.rbtnStyle = true;
  }

  ssubmit():Boolean{
    return this.sbtnStyle = true;
  }
}
