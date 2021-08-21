import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  async bookAplace(){
    const { value: formValues } = await Swal.fire({
      title: 'Agenda una cita',
      html:
        '<labe>Nombre</label> <input id="swal-input1" class="swal2-input" type="text">' +
        '<labe>Correo</label> <input id="swal-input2" class="swal2-input" type="email">' +
        '<labe>Mensaje</label><input id="swal-input3" class="swal2-input" type="text" placeholder="Dejanos tus comentarios aqui.">' +
        '<br><span>Te contactaremos lo antes posible.</span>',
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        return [
          (<HTMLInputElement>document.getElementById('swal-input1')).value,
          (<HTMLInputElement>document.getElementById('swal-input2')).value,
          (<HTMLInputElement>document.getElementById('swal-input3')).value
        ]
      }
    })
    
    if (formValues) {
      Swal.fire("Perfecto!","Ya tenemos tus datos","success");
      console.log(formValues);
    }
  }

  ngOnInit() {
  }

}
