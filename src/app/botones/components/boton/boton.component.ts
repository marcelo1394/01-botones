import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() btn!: 'boton' |'boton-grey'| 'boton-outline' | 'boton-outline-hover'| 'boton-texto'| 'boton-texto-hover'| 'boton-disable-shadow'| 'boton-disable' | 'boton-disable-text'
  | 'boton-sm'| 'boton-md'| 'boton-lg'| 'boton-default'| 'boton-primary'| 'boton-secondary'| 'boton-danger'| 'boton-default-hover'| 'boton-primary-hover'| 'boton-secondary-hover'| 'boton-danger-hover'
  | 'boton-icono'| 'boton-icono-2' ;
  @Input() label!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
