import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  nombre?: string;
  constructor(private _servicioFamiliar: ServicioFamiliarService) { }

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('juan')
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }
  saludar() {
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '');
  }

  preguntar() {
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
  // mensajeRecibido: string = '';

  // recibirMensaje($event: string) {
  //   this.mensajeRecibido = $event;
  // }

  // valueCount: number = 0;
  // //messageFather = 'Message from father';

  // increment() {
  //   this.valueCount++;
  // }

  // decrement() {
  //   this.valueCount--;
  // }
}
