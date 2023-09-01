import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioConsultarIdComponent } from './formulario-consultar-id.component';

describe('FormularioConsultarIdComponent', () => {
  let component: FormularioConsultarIdComponent;
  let fixture: ComponentFixture<FormularioConsultarIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioConsultarIdComponent]
    });
    fixture = TestBed.createComponent(FormularioConsultarIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
