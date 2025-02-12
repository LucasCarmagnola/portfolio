import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosEsComponent } from './proyectos-es.component';

describe('ProyectosEsComponent', () => {
  let component: ProyectosEsComponent;
  let fixture: ComponentFixture<ProyectosEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosEsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
