import { Cancion } from 'src/app/class/cancion';

export class favorito {
  favoritos: Cancion[] = [
    new Cancion(
      'https://i.scdn.co/image/ab67616d00001e02741f9c543f34b929f15c1b72',
      'Pa Co',
      14_500_33,
      150
    ),
  ];

  agregarFavorito(fav: any) {
    this.favoritos.push(fav)
    console.log("servicio fav",this.favoritos.length)
  }

  eliminarFavorito(id:number){
    this.favoritos = this.favoritos.filter((c,i)=> i !== id)
  }
}
