import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketerComponent } from './add-marketer.component';

describe('AddMarketerComponent', () => {
  let component: AddMarketerComponent;
  let fixture: ComponentFixture<AddMarketerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMarketerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarketerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
