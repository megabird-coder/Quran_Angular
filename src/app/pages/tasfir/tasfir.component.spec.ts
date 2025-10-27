import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasfirComponent } from './tasfir.component';

describe('TasfirComponent', () => {
  let component: TasfirComponent;
  let fixture: ComponentFixture<TasfirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasfirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasfirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
