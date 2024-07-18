import { Component } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  customers: any[] = [];

  constructor(private generalService: GeneralServiceService,){

    // Petición HTTP que trae todos los libros que estén en la base de datos.
    this.generalService.getCustomers().subscribe(
      (data) => {
        if (data.status == 1) {
          // Status 1 | Todo salio correctamente.
          this.customers = data.data;
        }
      },
      (error) => {
        if (error.status == 500) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ha Ocurrido un Error Interno!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    );

  }
}
