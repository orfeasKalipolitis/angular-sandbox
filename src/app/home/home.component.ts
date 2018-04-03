import { Component, OnInit } from '@angular/core';

import { NewPageNameDataService } from '../new-page-name-data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userPages: any;
  constructor(public router: Router, private _data: NewPageNameDataService) { }

  ngOnInit() {
    this._data.userPagesO.subscribe(res => this.userPages = res);
    this._data.updateBackButton(false);
  }

  ngAfterViewInit() {
    this._data.updateBackButton(false);
  }

  pageClicked(page) {
    this._data.changeActivePage(page);
    this._data.updateBackButton(true);
    this.router.navigate(['userPage']);
  }
}
