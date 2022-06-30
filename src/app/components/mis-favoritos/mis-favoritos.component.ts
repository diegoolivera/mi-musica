
import { Component } from '@angular/core';
import { Cancion } from 'src/app/class/cancion';
import { favorito } from 'src/services/favoritosService.service';




@Component({
  selector: 'Mis-favoritos',
  templateUrl: './mis-favoritos.component.html',
  styleUrls: ['./mis-favoritos.component.css'],
  providers:[favorito]

})


export class MisFavoritosComponent   {

  displayedColumns: string[] = ['imagen', 'nombre', 'likes', 'favorito'];

  dataSource:Cancion[] = []

  constructor(private favoritoService:favorito) {}

  obtenerTodo(){
    console.log(this.dataSource)
    this.dataSource = this.favoritoService.favoritos
  }
  eliminarFavorito(id:number){
    console.log("del componente",id)
    this.favoritoService.eliminarFavorito(id)
    this.obtenerTodo()
  }

}
