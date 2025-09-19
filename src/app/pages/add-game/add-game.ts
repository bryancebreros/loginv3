import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Videojuego {
  titulo: string;
  descripcion: string;
  imagen: string;
  fecha: string;
  rating: number;
}

@Component({
  selector: 'app-add-game',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-game.html',
  styleUrl: './add-game.css'
})
export class AddGame {
  nuevoJuego: Videojuego = {
    titulo: '',
    descripcion: '',
    imagen: '',
    fecha: '',
    rating: 0
     };

  juegos: Videojuego[] = [];

  constructor(private router: Router) {}

  agregarJuego() {
    if (
      this.nuevoJuego.titulo &&
      this.nuevoJuego.descripcion &&
      this.nuevoJuego.imagen &&
      this.nuevoJuego.fecha &&
      this.nuevoJuego.rating >= 0 && this.nuevoJuego.rating <= 5
    ) {
      this.juegos.push({ ...this.nuevoJuego });
      alert(`Juego "${this.nuevoJuego.titulo}" agregado con éxito`);
      
      this.nuevoJuego = { titulo: '', descripcion: '', imagen: '', fecha: '', rating: 0 };

      this.router.navigate(['/home']);
    } else {
      alert('Completa todos los campos correctamente. Rating entre 0 y 5.');
    }
  }
}
