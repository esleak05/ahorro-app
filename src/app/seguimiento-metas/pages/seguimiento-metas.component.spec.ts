import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoMetasComponent } from './seguimiento-metas.component';

describe('SeguimientoMetasComponent', () => {
  let component: SeguimientoMetasComponent;
  let fixture: ComponentFixture<SeguimientoMetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoMetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoMetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
