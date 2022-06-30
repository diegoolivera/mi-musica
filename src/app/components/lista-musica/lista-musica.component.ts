import { Component, OnInit } from '@angular/core';
import { Cancion } from 'src/app/class/cancion';
import { favorito } from 'src/services/favoritosService.service';
import { ListaCanciones } from 'src/services/musicaService.service';

@Component({
  selector: 'Lista-musica',
  templateUrl: './lista-musica.component.html',
  styleUrls: ['./lista-musica.component.css'],
  //servicio
  providers:[ListaCanciones,favorito]
})
export class ListaMusicaComponent implements OnInit {
  displayedColumns: string[] = ['Imagen', 'Nombre', 'Reproducciones', 'Likes','Favorito'];

   //vector para almacenar canciones del servicio

   dataSource:Cancion[] = [];

  // inyectando servicios
  constructor(private musicaService:ListaCanciones,private favoritosService:favorito) { }

  ngOnInit(): void {
    this.dataSource= this.musicaService.canciones;
    console.log("canciones",this.dataSource)

  }

  marcarFavorito(id:number){
    let fav = this.dataSource.find((f,i)=> i === id)
    this.favoritosService.agregarFavorito(fav)
  }

}
