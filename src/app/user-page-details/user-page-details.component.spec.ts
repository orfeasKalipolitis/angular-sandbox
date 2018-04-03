import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageDetailsComponent } from './user-page-details.component';

describe('UserPageDetailsComponent', () => {
  let component: UserPageDetailsComponent;
  let fixture: ComponentFixture<UserPageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
