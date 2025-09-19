import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Videojuego {
  titulo: string;
  descripcion: string;
  imagen: string;
  fecha: string;
  rating: number;
}

const JUEGOS_INICIALES: Videojuego[] = [
  { titulo: 'The Legend of Zelda', descripcion: 'Aventura épica', imagen: 'https://picsum.photos/200/300?random=1', fecha: '2000', rating: 5 },
  { titulo: 'Super Mario', descripcion: 'Plataformas clásicas', imagen: 'https://picsum.photos/200/300?random=2', fecha: '2000', rating: 5 },
  { titulo: 'Minecraft', descripcion: 'Construcción y supervivencia', imagen: 'https://picsum.photos/200/300?random=3', fecha: '2000', rating: 5 },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  juegos: Videojuego[] = JUEGOS_INICIALES;
}
