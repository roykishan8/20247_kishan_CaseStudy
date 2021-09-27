import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertestListComponent } from './usertest-list.component';

describe('UsertestListComponent', () => {
  let component: UsertestListComponent;
  let fixture: ComponentFixture<UsertestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
