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

  protected traduccion : boolean = false
  menu : boolean = false;
  idioma : string = 'EN';


  ngOnInit() {
    
    window.onclick = (event: MouseEvent) => {
      const menu = document.getElementById('menu');
      if (this.menu && menu) {
        this.menu = false;
      }
    }
  
  }

  goLink(link:string){
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    } else {
      console.error('No se proporcionó un enlace válido.')
    }
  }

  
  
  // ngOnInit() {
  //   const leftContainer = document.querySelector('.main') as HTMLElement;
    
  //   if (leftContainer) {
  //     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
  //     window.addEventListener('scroll', () => {
  //       const scrollY = Math.min(window.scrollY, maxScroll); // Limita el desplazamiento máximo
  //       leftContainer.style.top = `${scrollY}px`; // Mueve el contenedor izquierdo
  //     });
  //     // Escucha el evento de scroll del documento
  //   }
  // }
  
  cambiarMenu(){
    this.menu = !this.menu
  }

  changeLanguage(idioma:string){
    if(idioma === 'EN'){
      this.traduccion = false
      this.idioma = idioma
    }else{
      this.traduccion = true
      this.idioma = idioma
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
