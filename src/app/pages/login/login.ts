import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}
  
  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    if (this.email && this.password) {
      alert(`Bienvenido ${this.email}`);
      this.router.navigate(['/home']);    // redireccionamos a Home
    } else {
      alert('Completa todos los campos');
    }
  }
}
