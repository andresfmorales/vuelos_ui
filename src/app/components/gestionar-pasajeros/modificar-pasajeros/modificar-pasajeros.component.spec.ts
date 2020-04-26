import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPasajerosComponent } from './modificar-pasajeros.component';

describe('ModificarPasajerosComponent', () => {
  let component: ModificarPasajerosComponent;
  let fixture: ComponentFixture<ModificarPasajerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarPasajerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
