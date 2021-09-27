import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasktestListComponent } from './tasktest-list.component';

describe('TasktestListComponent', () => {
  let component: TasktestListComponent;
  let fixture: ComponentFixture<TasktestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasktestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasktestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
