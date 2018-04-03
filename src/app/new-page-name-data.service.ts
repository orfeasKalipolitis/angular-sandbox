import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NewPageNameDataService {

  private newNameP = new BehaviorSubject<String>('');
  private UserPages = new BehaviorSubject<any>([]);
  private ActivePage = new BehaviorSubject<any>({});
  private BackButton = new BehaviorSubject<Boolean>(false);
  newName = this.newNameP.asObservable();
  userPagesO = this.UserPages.asObservable();
  activePageO = this.ActivePage.asObservable();
  backButtonO = this.BackButton.asObservable();

  constructor() { }

  changeName(pageName) {
    let tmpUP = this.UserPages.value.slice();
    tmpUP.push({name: pageName});
    this.UserPages.next(tmpUP);
  }

  changeActivePage(page) {
    this.ActivePage.next(page);
  }

  updateActivePage(page) {
    this.ActivePage.next(page);
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

}
