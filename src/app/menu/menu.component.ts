import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private modalService: NgbModal) { }

  openLoginModal(action: 'crear' | 'actualizar' | 'eliminar') {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.action = action;
  }
}
