import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalatTimeComponent } from './salat-time.component';

describe('SalatTimeComponent', () => {
  let component: SalatTimeComponent;
  let fixture: ComponentFixture<SalatTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalatTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalatTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
