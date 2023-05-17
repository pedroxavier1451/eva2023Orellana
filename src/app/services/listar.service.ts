import { Injectable } from '@angular/core';
import { Listar } from '../domain/listar';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  listado: Listar[] = [] //Array para guardar los contactos

  constructor() { }

  save(listar: Listar){
    this.listado.push(listar) //Guarda los datos en contacto
    console.log(this.listado) //Mandamos a imprimir los contactos en consola
  }

  getList(){
    return this.listado //Retorna los contactos
  }
}
