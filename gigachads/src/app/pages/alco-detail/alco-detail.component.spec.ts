import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoDetailComponent } from './alco-detail.component';

describe('AlcoDetailComponent', () => {
  let component: AlcoDetailComponent;
  let fixture: ComponentFixture<AlcoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlcoDetailComponent]
    });
    fixture = TestBed.createComponent(AlcoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
