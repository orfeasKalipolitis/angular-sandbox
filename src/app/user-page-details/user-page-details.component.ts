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
  addingPost: Boolean = false;
  focused: Boolean = false;
  activePage: any;
  newPageName: '';
  newPostName: '';
  focusedPost: any;

  constructor(public router: Router, private _data: NewPageNameDataService) { }

  ngOnInit() {
    this._data.activePageO.subscribe(res => this.activePage = res);
  }

  changePageName() {
    this.activePage.name = this.newPageName;
    this._data.updateActivePage(this.activePage);
    this.settings = false;
  }

  addPost() {
    console.log(this.newPostName)
    this.activePage.posts.push({name: this.newPostName});
    this._data.updateActivePage(this.activePage);
    this.cancel();
  }

  focus(post) {
    this.focusedPost = post;
    this.focused = true;
  }

  changePostName() {
    let post = Object.assign({}, this.focusedPost);
    post.name = this.newPostName;
    let index = this.activePage.posts.indexOf(this.focusedPost);
    this.activePage.posts[index] = Object.assign({}, post);
    this._data.updateActivePage(this.activePage);
    this.cancel();
  }

  deletePage() {
    this._data.deleteActivePage();
    this._data.updateBackButton(false);
    this.router.navigate(['']);  
  }

  deletePost() {
    let index = this.activePage.posts.indexOf(this.focusedPost);
    this.activePage.posts.splice(index, 1);
    this._data.updateActivePage(this.activePage);
    this.cancel();
  }

  inSettings() {
    return !this.addingPost && !this.focused && this.settings;
  }

  inStdPage() {
    return !this.addingPost && !this.focused && !this.settings;
  }

  cancel() {
    this.settings = false;
    this.addingPost = false;
    this.focused = false;
    this.newPageName = '';
    this.newPostName = '';
    this.focusedPost = null;
  }

}
