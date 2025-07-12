import { Component, inject } from '@angular/core';
import { VechilesService } from '../vechiles.service';

@Component({
  selector: 'app-vechiles',
  templateUrl: './vechiles.component.html',
  styleUrl: './vechiles.component.scss'
})
export class VechilesComponent {

  vechilesService = inject(VechilesService);

  goToVechiles(){
    console.log("vehicleslist");
    this.vechilesService.fetchVehicleDataFromApi();
  }
}
