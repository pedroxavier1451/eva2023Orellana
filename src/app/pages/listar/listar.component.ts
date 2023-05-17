import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Listar } from 'src/app/domain/listar';
import { ListarService } from 'src/app/services/listar.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent {

  listado: Listar[] = []

  constructor(private listarService: ListarService, 
      private router: Router){
    this.listado = listarService.getList()
    console.log('listadoContactos', this.listado)
  }
  
  eliminar(listar: Listar){

    for(let i = 0 ; i < this.listado.length ; i++){
      if(this.listado[i] === listar){
        console.log("son iguales");
        this.listado.splice(i,1);
      }
    }
  }

}
