import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NewPageNameDataService {

  private newNameP = new BehaviorSubject<String>('');
  private UserPages = new BehaviorSubject<any>([]);
  private ActivePage = new BehaviorSubject<any>({});
  newName = this.newNameP.asObservable();
  userPagesO = this.UserPages.asObservable();
  activePageO = this.ActivePage.asObservable();

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

}
