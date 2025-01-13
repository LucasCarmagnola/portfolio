import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  ngOnInit() {
    const leftContainer = document.querySelector('.main') as HTMLElement;
  
    if (leftContainer) {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  
      // Escucha el evento de scroll del documento
      window.addEventListener('scroll', () => {
        const scrollY = Math.min(window.scrollY, maxScroll); // Limita el desplazamiento máximo
        leftContainer.style.top = `${scrollY}px`; // Mueve el contenedor izquierdo
      });
    }
  }
  

  // ngOnInit() {
  //   const leftContainer = document.querySelector('.main') as HTMLElement;
  
  //   if (leftContainer) {
  //     // Obtén el alto total de la página menos el alto del contenedor izquierdo
  //     const maxScroll = document.documentElement.scrollHeight - leftContainer.offsetHeight;
  
  //     // Escucha el evento de scroll en el documento
  //     window.addEventListener('scroll', () => {
  //       const scrollY = Math.min(window.scrollY, maxScroll); // Limita el scroll máximo
  //       leftContainer.style.transform = `translateY(${scrollY}px)`;
  //     });
  //   }
  // }
  
  // ngOnInit() {
  //   const leftContainer = document.querySelector('.main') as HTMLElement;
  
  //   if (leftContainer) {
  //     // Escucha el evento de scroll en el documento
  //     window.addEventListener('scroll', () => {
  //       // Ajusta la posición vertical del contenedor izquierdo según el scroll de la página
  //       leftContainer.style.transform = `translateY(${window.scrollY}px)`;
  //     });
  //   }
  // }

}
