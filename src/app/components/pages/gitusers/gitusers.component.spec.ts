import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitusersComponent } from './gitusers.component';

describe('GitusersComponent', () => {
  let component: GitusersComponent;
  let fixture: ComponentFixture<GitusersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitusersComponent]
    });
    fixture = TestBed.createComponent(GitusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
