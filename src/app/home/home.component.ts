import { Component, OnInit } from '@angular/core';

import { NewPageNameDataService } from '../new-page-name-data.service';

import { Router } from '@angular/router';

var FileSaver = require('file-saver')

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userPages: any;
  postPrefix: any;
  tmpPrefix: '';
  settings: Boolean = false;

  constructor(public router: Router, private _data: NewPageNameDataService) { }

  ngOnInit() {
    this._data.userPagesO.subscribe(res => this.userPages = res);
    this._data.updateBackButton(false);
    this._data.prefixO.subscribe(res => this.postPrefix = res)
  }

  ngAfterViewInit() {
    this._data.updateBackButton(false);
  }

  pageClicked(page) {
    this._data.changeActivePage(page);
    this._data.updateBackButton(true);
    this.router.navigate(['userPage']);
  }

  gotoSettings() {
    this.settings = true;
    this.tmpPrefix = this.postPrefix;
  }

  changePrefix() {
    this._data.updatePrefix(this.tmpPrefix);
    this.cancel();
  }

  exportJSON() {
    let jsonData = '{' + 
    '"UserPages": ' + JSON.stringify(this.userPages) + 
    ', "prefix": ' + '"' + this.postPrefix + '"' +
    '}';
    var blob = new Blob([jsonData], {type: 'text/plain;charset=utf-8'})
    FileSaver.saveAs(blob, 'project-data.json')
  }

  cancel() {
    this.tmpPrefix = '';
    this.settings = false;
  }
}
