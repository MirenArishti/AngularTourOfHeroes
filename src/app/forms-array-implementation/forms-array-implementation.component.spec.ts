import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsArrayImplementationComponent } from './forms-array-implementation.component';

describe('FormsArrayImplementationComponent', () => {
  let component: FormsArrayImplementationComponent;
  let fixture: ComponentFixture<FormsArrayImplementationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsArrayImplementationComponent]
    });
    fixture = TestBed.createComponent(FormsArrayImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
