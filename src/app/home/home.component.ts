import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Swal.fire({
      title: 'Hola mundo!',
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }

}
