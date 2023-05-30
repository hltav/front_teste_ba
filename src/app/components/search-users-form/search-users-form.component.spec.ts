import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUsersFormComponent } from './search-users-form.component';

describe('SearchUsersFormComponent', () => {
  let component: SearchUsersFormComponent;
  let fixture: ComponentFixture<SearchUsersFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchUsersFormComponent]
    });
    fixture = TestBed.createComponent(SearchUsersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
