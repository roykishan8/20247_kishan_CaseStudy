import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesignupUserComponent } from './updatesignup-user.component';

describe('UpdatesignupUserComponent', () => {
  let component: UpdatesignupUserComponent;
  let fixture: ComponentFixture<UpdatesignupUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesignupUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesignupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
