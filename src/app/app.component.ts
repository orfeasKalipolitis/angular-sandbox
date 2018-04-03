import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';

import { NewPageNameDataService } from './new-page-name-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  backButton: Boolean;

  constructor(public router: Router, private _data: NewPageNameDataService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this._data.backButtonO.subscribe(res => this.backButton = res);
  }

  back() {
    this._data.updateBackButton(false);
    this.cdr.detectChanges();
    this.router.navigate(['']);
  }

}
