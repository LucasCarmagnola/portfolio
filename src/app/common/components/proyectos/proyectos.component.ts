import { Component, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const playpen = this.el.nativeElement.querySelector('#playpen');
    const navLinks = this.el.nativeElement.querySelectorAll('.nav a');

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
  }

}
