import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page-creator',
  templateUrl: './user-page-creator.component.html',
  styleUrls: ['./user-page-creator.component.scss']
})
export class UserPageCreatorComponent implements OnInit {

  newPageName: '';

  constructor(public router: Router) { }

  ngOnInit() {
  }

  addPage() {
    console.log(this.newPageName);
    this.router.navigate(['']);
  }
}
