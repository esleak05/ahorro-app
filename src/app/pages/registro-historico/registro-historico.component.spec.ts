import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHistoricoComponent } from './registro-historico.component';

describe('RegistroHistoricoComponent', () => {
  let component: RegistroHistoricoComponent;
  let fixture: ComponentFixture<RegistroHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
