import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnaComponent } from './sunna.component';

describe('SunnaComponent', () => {
  let component: SunnaComponent;
  let fixture: ComponentFixture<SunnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunnaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
