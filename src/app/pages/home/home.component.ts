import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    // Solo inicializar AOS si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
      });
    }
  }
  features = [
    {
      title: 'CRM Inteligente',
      description:
        'Gestión de clientes con IA predictiva para optimizar ventas',
      icon: 'bx bx-brain',
    },
    {
      title: 'Análisis en Tiempo Real',
      description: 'Estadísticas y métricas actualizadas al instante',
      icon: 'bx bx-line-chart',
    },
    {
      title: 'Automatización de Procesos',
      description: 'Flujos de trabajo automatizados para mayor eficiencia',
      icon: 'bx bx-cog',
    },
    {
      title: 'Gestión de Equipos',
      description: 'Colaboración y seguimiento de equipos de ventas',
      icon: 'bx bx-group',
    },
    {
      title: 'Integración Multicanal',
      description:
        'Conecta y gestiona todos tus canales de venta desde un solo lugar',
      icon: 'bx bx-network-chart',
    },
    {
      title: 'Reportes Personalizados',
      description: 'Crea informes a medida para tus necesidades específicas',
      icon: 'bx bx-file',
    },
  ];
}
