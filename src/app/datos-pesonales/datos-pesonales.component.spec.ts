import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPesonalesComponent } from './datos-pesonales.component';

describe('DatosPesonalesComponent', () => {
  let component: DatosPesonalesComponent;
  let fixture: ComponentFixture<DatosPesonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosPesonalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPesonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
