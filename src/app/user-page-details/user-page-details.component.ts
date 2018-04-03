import { Component, OnInit } from '@angular/core';

import { NewPageNameDataService } from '../new-page-name-data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page-details',
  templateUrl: './user-page-details.component.html',
  styleUrls: ['./user-page-details.component.scss']
})
export class UserPageDetailsComponent implements OnInit {

  activePage: any;

  constructor(public router: Router, private _data: NewPageNameDataService) { }

  ngOnInit() {
    this._data.activePageO.subscribe(res => this.activePage = res);
  }

}
