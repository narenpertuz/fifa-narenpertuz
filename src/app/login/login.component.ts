import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  action?: 'crear' | 'actualizar' | 'eliminar';

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router
  ) { }

  login() {
    if (this.username && this.password) {
      this.activeModal.close();
      this.router.navigate([this.getRedirectRoute()]);
    }
  }

  private getRedirectRoute(): string {
    if (this.action === 'crear') {
      return '/equipos/crear';
    } else if (this.action === 'actualizar') {
      return '/equipos/actualizar/id';
    } else if (this.action === 'eliminar') {
      return '/equipos/eliminar/id';
    }
    return '/equipos/listar';
  }
}
