import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { NewPageNameDataService } from '../new-page-name-data.service';

@Component({
  selector: 'app-user-page-creator',
  templateUrl: './user-page-creator.component.html',
  styleUrls: ['./user-page-creator.component.scss']
})
export class UserPageCreatorComponent implements OnInit {

  newPageName: String = '';
  sepName: any;

  constructor(public router: Router, private _data: NewPageNameDataService) { }

  ngOnInit() {
    this._data.newName.subscribe(res => this.newPageName = res);
  }

  addPage() {
    this._data.changeName(this.newPageName);
    this.router.navigate(['']);
  }
}
