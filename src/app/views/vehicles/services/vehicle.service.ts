import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { VehicleModel } from "../models/vehicle.model";
import { Observable } from "rxjs";
import { RepVehicleModel } from "../models/repvehicle.model";
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  //url de su api (backend)
  private API_URL = 'http://localhost:8000/vehicles'
  constructor(private http: HttpClient) {

  }

  getTodasLosVehicles (): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(`${this.API_URL}`);
  }

  agregarVehicle(vehicle: VehicleModel) : Observable<VehicleModel> {
    return this.http.post<VehicleModel>(`${this.API_URL}`, vehicle);
  }

  editarVehicle(vehicle: VehicleModel) : Observable<VehicleModel> {
    return this.http.put<VehicleModel>(`${this.API_URL}/${vehicle._id}`, vehicle);
  }

  eliminarVehicle(idReceta: string) : Observable<VehicleModel> {
    return this.http.delete<VehicleModel>(`${this.API_URL}/${idReceta}`);
  }
//reporte 1
  reporVehicleTicket(idVehicle : string) : Observable<any> {
    console.log(idVehicle);
    // return this.http.delete<VehicleModel>(`${this.API_URL}/eliminar/${idVehicle}`);
    return this.http.get<any>(this.API_URL+'/multasporvehiculo/'+idVehicle);

  }
// reporte 2
  reporAllTicketsVehicles() : any {

    // return this.http.delete<VehicleModel>(`${this.API_URL}/eliminar/${idVehicle}`);
    return this.http.get<RepVehicleModel>(this.API_URL+'/detallemultasporvehiculo');

  }


}
