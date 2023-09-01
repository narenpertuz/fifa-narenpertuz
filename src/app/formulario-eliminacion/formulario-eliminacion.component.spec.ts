import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEliminacionComponent } from './formulario-eliminacion.component';

describe('FormularioEliminacionComponent', () => {
  let component: FormularioEliminacionComponent;
  let fixture: ComponentFixture<FormularioEliminacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEliminacionComponent]
    });
    fixture = TestBed.createComponent(FormularioEliminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
