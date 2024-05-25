import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import {CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective,
  NavComponent, NavItemComponent, NavLinkDirective, TabContentRefDirective, TabContentComponent, RoundedDirective, TabPaneComponent
} from '@coreui/angular';
import { RepVehicleModel } from '../models/repvehicle.model';
import { VehicleService } from '../services/vehicle.service';
// import { RepoVehicleModel } from '../models/repvehicle.model';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [RowComponent, ColComponent,RouterLink, CommonModule,IconDirective,CardComponent,  NavComponent, NavItemComponent, NavLinkDirective, TabContentRefDirective, TabContentComponent, RoundedDirective, TabPaneComponent,
    CardHeaderComponent, CardBodyComponent,
    ReactiveFormsModule ,FormsModule, FormDirective,
    FormSelectDirective,FormControlDirective,
     FormLabelDirective, ButtonDirective, NgStyle,
     TextColorDirective,
     TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss'
})
export class ReportesComponent {
  listaVehicles_multas : any[] = [];
  listaVehicles_byId: any[] = [];
  repVehicleModel : RepVehicleModel = new RepVehicleModel();

  constructor(private vehicleService: VehicleService) {
    this.reporVehicleTicket();
  }


  reporVehicleTicketId(){
    this.vehicleService.reporVehicleTicket(this.repVehicleModel.idVehiculo).subscribe({
      next : (respuesta: any) => {
          console.log(respuesta);
          this.listaVehicles_byId = respuesta;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  reporVehicleTicket(){
    this.vehicleService.reporAllTicketsVehicles().subscribe({
      next : (respuesta: any) => {
          console.log(respuesta);
          this.listaVehicles_multas = respuesta;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }


}
