import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBtnComponent } from './search-btn.component';

describe('SearchBtnComponent', () => {
  let component: SearchBtnComponent;
  let fixture: ComponentFixture<SearchBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBtnComponent]
    });
    fixture = TestBed.createComponent(SearchBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
