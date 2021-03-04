import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualesComponent } from './anuales.component';

describe('AnualesComponent', () => {
  let component: AnualesComponent;
  let fixture: ComponentFixture<AnualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
