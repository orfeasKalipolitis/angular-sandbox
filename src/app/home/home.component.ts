import { Component, OnInit } from '@angular/core';

import { NewPageNameDataService } from '../new-page-name-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newPage: any;
  userPages: any;
  constructor(private _data: NewPageNameDataService) { }

  ngOnInit() {
    this._data.userPagesO.subscribe(res => this.userPages = res);
  }

}
