import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title= "UserHub";
  private  router = inject(Router);
  goToHome(){
    this.router.navigate(['/home']);
  }
  goToQuienSoy(){
    this.router.navigate(['/quien-soy']);

  }
  goToRegistro(){
    this.router.navigate(['/registros']);
  }
}
