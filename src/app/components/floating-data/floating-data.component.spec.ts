import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingDataComponent } from './floating-data.component';

describe('FloatingDataComponent', () => {
  let component: FloatingDataComponent;
  let fixture: ComponentFixture<FloatingDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingDataComponent]
    });
    fixture = TestBed.createComponent(FloatingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
