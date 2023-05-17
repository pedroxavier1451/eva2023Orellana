import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Listar } from 'src/app/domain/listar';
import { ListarService } from 'src/app/services/listar.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  listar: Listar = new Listar();
  
  constructor(private listarService: ListarService,
    private router: Router) {
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.listar = new Listar()
        this.listar = params['listar']
      }
    }

  guardar(){
    console.log(this.listar);
    this.listarService.save(this.listar)
    this.listar = new Listar()
  }

}
