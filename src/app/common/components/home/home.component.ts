import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
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
  bandera : string = 'eeuu-flag.png'

  constructor(private renderer: Renderer2, private el: ElementRef) {}


  ngOnInit() {

    const playpen = this.el.nativeElement.querySelector('#playpen');
    const navLinks = this.el.nativeElement.querySelectorAll('.nav a');
    const modal = document.getElementById('container-video') as HTMLDialogElement

    // modal.addEventListener("click", (event) => {
    //   if (event.target === modal) {
    //     modal.close();
    //   }
    // });


    if (playpen) {
      const originalBGplaypen = window.getComputedStyle(playpen).backgroundColor;

      playpen.addEventListener('mousemove', (e: MouseEvent) => {
        const x = e.pageX - playpen.offsetLeft;
        const y = e.pageY - playpen.offsetTop;
        const lightColor = "rgba(55, 97, 221, 0.25)";
        const gradientSize = 300;

        const bgWebKit = `-webkit-gradient(radial, ${x} ${y}, 0, ${x} ${y}, ${gradientSize}, from(${lightColor}), to(rgba(255,255,255,0.0))), ${originalBGplaypen}`;
        const bgMoz = `-moz-radial-gradient(${x}px ${y}px 45deg, circle, ${lightColor} 0%, ${originalBGplaypen} ${gradientSize}px)`;

        this.renderer.setStyle(playpen, 'background', bgWebKit);
        this.renderer.setStyle(playpen, 'background', bgMoz);
      });

      playpen.addEventListener('mouseleave', () => {
        this.renderer.setStyle(playpen, 'background', originalBGplaypen);
      });
    }

    navLinks.forEach((link: HTMLElement) => {
      if (!link.classList.contains('active')) {
        const originalBG = window.getComputedStyle(link).backgroundColor;

        link.addEventListener('mousemove', (e: MouseEvent) => {
          const x = e.pageX - link.offsetLeft;
          const y = e.pageY - link.offsetTop;
          const lightColor = "rgba(255,255,255,0.8)";

          const bgWebKit = `-webkit-gradient(radial, ${x} ${y}, 0, ${x} ${y}, 100, from(${lightColor}), to(rgba(255,255,255,0.0))), ${originalBG}`;
          const bgMoz = `-moz-radial-gradient(${x}px ${y}px 45deg, circle, ${lightColor} 0%, ${originalBG} 100px)`;

          this.renderer.setStyle(link, 'background', bgWebKit);
          this.renderer.setStyle(link, 'background', bgMoz);
        });

        link.addEventListener('mouseleave', () => {
          this.renderer.setStyle(link, 'background', originalBG);
        });
      }
    });
    
    window.onclick = (event: MouseEvent) => {
      const menu = document.getElementById('menu');
      if (this.menu && menu) {
        this.menu = false;
      }
      else if (event.target === modal) {
        document.body.style.overflowY = "auto"
        modal.close();
      }
    }

    modal.addEventListener("close", () => {
      document.body.style.overflowY = "auto"
    });
  
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
      this.bandera = 'eeuu-flag.png'
    }else{
      this.traduccion = true
      this.idioma = idioma
      this.bandera = 'arg-flag.png'
    }
  }

  goScroll(numeroScroll : number){
    //window.scrollTo(0, numeroScroll)
    window.scrollTo({
    top: numeroScroll, 
    left: 0, 
    behavior: 'smooth' 
  });
  }

  openModal(src : string){
    const modal = document.getElementById('container-video') as HTMLDialogElement
    const video = document.getElementById('video') as HTMLVideoElement

    video.src = src
    modal.showModal()
    video.play()

    document.body.style.overflowY = "hidden"
  }

  closeModal(){
    const modal = document.getElementById('container-video') as HTMLDialogElement
    const video = document.getElementById('video') as HTMLVideoElement
    document.body.style.overflowY = "auto"

    video.pause()
    video.src = ""
    modal.close()

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
