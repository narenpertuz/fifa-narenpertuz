import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioConsultarFechaComponent } from './formulario-consultar-fecha.component';

describe('FormularioConsultarFechaComponent', () => {
  let component: FormularioConsultarFechaComponent;
  let fixture: ComponentFixture<FormularioConsultarFechaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioConsultarFechaComponent]
    });
    fixture = TestBed.createComponent(FormularioConsultarFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
