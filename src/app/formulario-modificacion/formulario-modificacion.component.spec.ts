import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioModificacionComponent } from './formulario-modificacion.component';

describe('FormularioModificacionComponent', () => {
  let component: FormularioModificacionComponent;
  let fixture: ComponentFixture<FormularioModificacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioModificacionComponent]
    });
    fixture = TestBed.createComponent(FormularioModificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
