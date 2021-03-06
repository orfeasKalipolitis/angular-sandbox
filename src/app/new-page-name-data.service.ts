import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NewPageNameDataService {

  private newNameP = new BehaviorSubject<String>('');
  private UserPages = new BehaviorSubject<any>([]);
  private ActivePage = new BehaviorSubject<any>({});
  private BackButton = new BehaviorSubject<Boolean>(false);
  private Prefix = new BehaviorSubject<String>('');
  newName = this.newNameP.asObservable();
  userPagesO = this.UserPages.asObservable();
  activePageO = this.ActivePage.asObservable();
  backButtonO = this.BackButton.asObservable();
  prefixO = this.Prefix.asObservable();

  constructor() { }

  changeName(pageName) {
    let tmpUP = this.UserPages.value.slice();
    tmpUP.push({name: pageName, posts: []});
    this.UserPages.next(tmpUP);
  }

  changeActivePage(page) {
    this.ActivePage.next(page);
  }

  updateActivePage(page) {
    this.ActivePage.next(page);
  }

  updatePrefix(prefix) {
    this.Prefix.next(prefix);
  }

  deleteActivePage() {
    let tmpUP = this.UserPages.value.slice();
    let index = tmpUP.indexOf(this.ActivePage.value);
    tmpUP.splice(index, 1);
    this.UserPages.next(tmpUP);
  }

  updateBackButton(value) {
    this.BackButton.next(value);
  }

  updateUserPages(newUP) {
    this.UserPages.next(newUP);
  }

}
