import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetestProductComponent } from './updatetest-product.component';

describe('UpdatetestProductComponent', () => {
  let component: UpdatetestProductComponent;
  let fixture: ComponentFixture<UpdatetestProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetestProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetestProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
