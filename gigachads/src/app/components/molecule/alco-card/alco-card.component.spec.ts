import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoCardComponent } from './alco-card.component';

describe('AlcoCardComponent', () => {
  let component: AlcoCardComponent;
  let fixture: ComponentFixture<AlcoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlcoCardComponent]
    });
    fixture = TestBed.createComponent(AlcoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
