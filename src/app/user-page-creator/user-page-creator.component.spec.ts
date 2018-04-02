import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageCreatorComponent } from './user-page-creator.component';

describe('UserPageCreatorComponent', () => {
  let component: UserPageCreatorComponent;
  let fixture: ComponentFixture<UserPageCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
