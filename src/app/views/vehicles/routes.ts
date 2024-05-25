import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: 'vehicle',
        loadComponent: () => import('./vehicle/vehicle.component').then(m => m.VehicleComponent),
        data: {
          title: 'Vehicle'
        }
      },
      {
        path: 'reportes',
        loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
        data: {
          title: 'Reportes'
        }
      },
    ]

  }
]