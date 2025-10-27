import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaranComponent } from './quaran.component';

describe('QuaranComponent', () => {
  let component: QuaranComponent;
  let fixture: ComponentFixture<QuaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuaranComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
