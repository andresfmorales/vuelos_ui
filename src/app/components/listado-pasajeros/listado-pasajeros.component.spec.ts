import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPasajerosComponent } from './listado-pasajeros.component';

describe('ListadoPasajerosComponent', () => {
  let component: ListadoPasajerosComponent;
  let fixture: ComponentFixture<ListadoPasajerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPasajerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
