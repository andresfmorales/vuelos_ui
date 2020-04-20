import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPasajerosComponent } from './gestionar-pasajeros.component';

describe('GestionarPasajerosComponent', () => {
  let component: GestionarPasajerosComponent;
  let fixture: ComponentFixture<GestionarPasajerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarPasajerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarPasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
