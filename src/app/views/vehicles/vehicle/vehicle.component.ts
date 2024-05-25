import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { VehicleModel } from '../models/vehicle.model';
import { VehicleService } from '../services/vehicle.service';
import {CommonModule } from '@angular/common'

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent, CommonModule,
    CardHeaderComponent, CardBodyComponent,
    ReactiveFormsModule ,FormsModule, FormDirective,
    FormSelectDirective,FormControlDirective,
     FormLabelDirective, ButtonDirective, NgStyle,
     TextColorDirective,
     TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss'
})
export class VehicleComponent {
  listaVehicles : VehicleModel[] = [];
  vehicleModelo : VehicleModel = new VehicleModel();
  /**
   *
   */
  constructor(private vehicleService: VehicleService) {
    this.getVehicles();

  }

  getVehicles(){
    this.vehicleService.getTodasLosVehicles().subscribe({
      next : (respuesta) => {
          console.log(respuesta);
          this.listaVehicles = respuesta;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  guardarVehicle(){
    console.log(this.vehicleModelo._id);
    if (this.vehicleModelo._id === '') {
      console.log("guardar", this.vehicleModelo);
      this.agregarVehicle();
    } else {
      console.log("editar", this.vehicleModelo);
      this.editarVehicle();
    }
  }

  agregarVehicle(){
    this.vehicleService.agregarVehicle(this.vehicleModelo).subscribe({
      next : (respuesta) => {
          console.log("Se guardo exitosamente",respuesta);
          this.getVehicles();
          this.vehicleModelo = new VehicleModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  eliminarVehicle(vehicle: VehicleModel){
    console.log("itema para eliminar", vehicle);
    this.vehicleService.eliminarVehicle(vehicle._id).subscribe({
      next : (respuesta) => {
          console.log("Se elimino exitosamente",respuesta);
          this.getVehicles();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  verVehicle(vehicle: VehicleModel){
    this.vehicleModelo = vehicle;
  }

  editarVehicle(){
    this.vehicleService.editarVehicle(this.vehicleModelo).subscribe({
      next : (respuesta) => {
          console.log("Se edito exitosamente",respuesta);
          this.getVehicles();
          this.vehicleModelo = new VehicleModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }


}
