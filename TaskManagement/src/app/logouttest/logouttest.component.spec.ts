import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogouttestComponent } from './logouttest.component';

describe('LogouttestComponent', () => {
  let component: LogouttestComponent;
  let fixture: ComponentFixture<LogouttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogouttestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogouttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
