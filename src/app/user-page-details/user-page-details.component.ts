import { Component, OnInit } from '@angular/core';

import { NewPageNameDataService } from '../new-page-name-data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page-details',
  templateUrl: './user-page-details.component.html',
  styleUrls: ['./user-page-details.component.scss']
})
export class UserPageDetailsComponent implements OnInit {

  settings: Boolean = false;
  activePage: any;
  newPageName: '';

  constructor(public router: Router, private _data: NewPageNameDataService) { }

  ngOnInit() {
    this._data.activePageO.subscribe(res => this.activePage = res);
  }

  changePageName() {
    this.activePage.name = this.newPageName;
    this._data.updateActivePage(this.activePage);
    this.settings = false;
  }

  cancel() {
    this.settings = false;
    this.newPageName = '';
  }

}
