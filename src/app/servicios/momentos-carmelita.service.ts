import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MomentosCarmelitaService {
  momentosc: any = [
    {
      album: 'Capula',
      portada: 'assets/img/galeria-momentos-carmelita/capula/13.png',
      descportada: 'Portada de Viaje a Capula',
      img1: 'assets/img/galeria-momentos-carmelita/capula/1.png',
      alt1:'Foto de Viaje a Capula 1',
      img2: 'assets/img/galeria-momentos-carmelita/capula/2.png',
      alt2:'Foto de Viaje a Capula 2',
      img3:'assets/img/galeria-momentos-carmelita/capula/3.png',
      alt3:'Foto de Viaje a Capula 3',
      img4: 'assets/img/galeria-momentos-carmelita/capula/4.png',
      alt4:'Foto de Viaje a Capula 4',
      img5:'assets/img/galeria-momentos-carmelita/capula/5.png',
      alt5:'Foto de Viaje a Capula 5',
      img6: 'assets/img/galeria-momentos-carmelita/capula/6.png',
      alt6:'Foto de Viaje a Capula 6',
      img7:'assets/img/galeria-momentos-carmelita/capula/7.png',
      alt7:'Foto de Viaje a Capula 7',
      img8:'assets/img/galeria-momentos-carmelita/capula/8.png',
      alt8:'Foto de Viaje a Capula 8',
      img9:'assets/img/galeria-momentos-carmelita/capula/9.png',
      alt9:'Foto de Viaje a Capula 9',
      img10:'assets/img/galeria-momentos-carmelita/capula/10.png',
      alt10:'Foto de Viaje a Capula 10',
      img11:'assets/img/galeria-momentos-carmelita/capula/11.png',
      alt11:'Foto de Viaje a Capula 11',
      img12:'assets/img/galeria-momentos-carmelita/capula/12.png',
      alt12:'Foto de Viaje a Capula 12',
      img13:'assets/img/galeria-momentos-carmelita/capula/13.png',
      alt13:'Foto de Viaje a Capula 13',
      img14:'assets/img/galeria-momentos-carmelita/capula/14.png',
      alt14:'Foto de Viaje a Capula 14',
      img15:'assets/img/galeria-momentos-carmelita/capula/15.png',
      alt15:'Foto de Viaje a Capula 15',
      img16:'assets/img/galeria-momentos-carmelita/capula/16.png',
      alt16:'Foto de Viaje a Capula 16',
      img17:'assets/img/galeria-momentos-carmelita/capula/17.png',
      alt17:'Foto de Viaje a Capula 17',
    },
    {
      album: 'Día de muertos',
      portada: 'assets/img/galeria-momentos-carmelita/dia-de-muertos/12.png',
      descportada: 'Portada de día de muertos',
      img1: 'assets/img/galeria-momentos-carmelita/dia-de-muertos/1.png',
      alt1:'Foto de día de muertos 1',
      img2: 'assets/img/galeria-momentos-carmelita/dia-de-muertos/2.png',
      alt2:'Foto de día de muertos 2',
      img3:'assets/img/galeria-momentos-carmelita/dia-de-muertos/3.png',
      alt3:'Foto de día de muertos 3',
      img4: 'assets/img/galeria-momentos-carmelita/dia-de-muertos/4.png',
      alt4:'Foto de día de muertos 4',
      img5:'assets/img/galeria-momentos-carmelita/dia-de-muertos/5.png',
      alt5:'Foto de día de muertos 5',
      img6: 'assets/img/galeria-momentos-carmelita/dia-de-muertos/6.png',
      alt6:'Foto de día de muertos 6',
      img7:'assets/img/galeria-momentos-carmelita/dia-de-muertos/7.png',
      alt7:'Foto de día de muertos 7',
      img8:'assets/img/galeria-momentos-carmelita/dia-de-muertos/8.png',
      alt8:'Foto de día de muertos 8',
      img9:'assets/img/galeria-momentos-carmelita/dia-de-muertos/9.png',
      alt9:'Foto de día de muertos 9',
      img10:'assets/img/galeria-momentos-carmelita/dia-de-muertos/10.png',
      alt10:'Foto de día de muertos 10',
      img11:'assets/img/galeria-momentos-carmelita/dia-de-muertos/11.png',
      alt11:'Foto de día de muertos 11',
      img12:'assets/img/galeria-momentos-carmelita/dia-de-muertos/12.png',
      alt12:'Foto de día de muertos 12',
      img13:'assets/img/galeria-momentos-carmelita/dia-de-muertos/13.png',
      alt13:'Foto de día de muertos 13',
      img14:'assets/img/galeria-momentos-carmelita/dia-de-muertos/14.png',
      alt14:'Foto de día de muertos 14',
      img15:'assets/img/galeria-momentos-carmelita/dia-de-muertos/15.png',
      alt15:'Foto de día de muertos 15',
      img16:'assets/img/galeria-momentos-carmelita/dia-de-muertos/16.png',
      alt16:'Foto de día de muertos 16',
      img17:'assets/img/galeria-momentos-carmelita/dia-de-muertos/17.png',
      alt17:'Foto de día de muertos 17',
    },
    {
      album: 'Fábrica',
      portada: 'assets/img/galeria-momentos-carmelita/fabrica/13.png',
      descportada: 'Portada en la fábrica',
      img1: 'assets/img/galeria-momentos-carmelita/fabrica/1.png',
      alt1:'Foto en la fábrica 1',
      img2: 'assets/img/galeria-momentos-carmelita/fabrica/2.png',
      alt2:'Foto en la fábrica 2',
      img3:'assets/img/galeria-momentos-carmelita/fabrica/3.png',
      alt3:'Foto en la fábrica 3',
      img4: 'assets/img/galeria-momentos-carmelita/fabrica/4.png',
      alt4:'Foto en la fábrica 4',
      img5:'assets/img/galeria-momentos-carmelita/fabrica/5.png',
      alt5:'Foto en la fábrica 5',
      img6: 'assets/img/galeria-momentos-carmelita/fabrica/6.png',
      alt6:'Foto en la fábrica 6',
      img7:'assets/img/galeria-momentos-carmelita/fabrica/7.png',
      alt7:'Foto en la fábrica 7',
      img8:'assets/img/galeria-momentos-carmelita/fabrica/8.png',
      alt8:'Foto en la fábrica 8',
      img9:'assets/img/galeria-momentos-carmelita/fabrica/9.png',
      alt9:'Foto en la fábrica 9',
      img10:'assets/img/galeria-momentos-carmelita/fabrica/10.png',
      alt10:'Foto en la fábrica 10',
      img11:'assets/img/galeria-momentos-carmelita/fabrica/11.png',
      alt11:'Foto en la fábrica 11',
      img12:'assets/img/galeria-momentos-carmelita/fabrica/12.png',
      alt12:'Foto en la fábrica 12',
      img13:'assets/img/galeria-momentos-carmelita/fabrica/13.png',
      alt13:'Foto en la fábrica 13',
      img14:'assets/img/galeria-momentos-carmelita/fabrica/14.png',
      alt14:'Foto en la fábrica 14',
      img15:'assets/img/galeria-momentos-carmelita/fabrica/15.png',
      alt15:'Foto en la fábrica 15',
      img16:'assets/img/galeria-momentos-carmelita/fabrica/16.png',
      alt16:'Foto en la fábrica 16',
      img17:'assets/img/galeria-momentos-carmelita/fabrica/17.png',
      alt17:'Foto en la fábrica 17',
    },
    {
      album: 'Rincón Carmelita',
      portada: 'assets/img/galeria-momentos-carmelita/rincon-carmelita/14.png',
      descportada: 'Portada en el rincón de Rompope Carmelita',
      img1: 'assets/img/galeria-momentos-carmelita/rincon-carmelita/1.png',
      alt1:'Foto en el rincón de Rompope Carmelita 1',
      img2: 'assets/img/galeria-momentos-carmelita/rincon-carmelita/2.png',
      alt2:'Foto en el rincón de Rompope Carmelita 2',
      img3:'assets/img/galeria-momentos-carmelita/rincon-carmelita/3.png',
      alt3:'Foto en el rincón de Rompope Carmelita 3',
      img4: 'assets/img/galeria-momentos-carmelita/rincon-carmelita/4.png',
      alt4:'Foto en el rincón de Rompope Carmelita 4',
      img5:'assets/img/galeria-momentos-carmelita/rincon-carmelita/5.png',
      alt5:'Foto en el rincón de Rompope Carmelita 5',
      img6: 'assets/img/galeria-momentos-carmelita/rincon-carmelita/6.png',
      alt6:'Foto en el rincón de Rompope Carmelita 6',
      img7:'assets/img/galeria-momentos-carmelita/rincon-carmelita/7.png',
      alt7:'Foto en el rincón de Rompope Carmelita 7',
      img8:'assets/img/galeria-momentos-carmelita/rincon-carmelita/8.png',
      alt8:'Foto en el rincón de Rompope Carmelita 8',
      img9:'assets/img/galeria-momentos-carmelita/rincon-carmelita/9.png',
      alt9:'Foto en el rincón de Rompope Carmelita 9',
      img10:'assets/img/galeria-momentos-carmelita/rincon-carmelita/10.png',
      alt10:'Foto en el rincón de Rompope Carmelita 10',
      img11:'assets/img/galeria-momentos-carmelita/rincon-carmelita/11.png',
      alt11:'Foto en el rincón de Rompope Carmelita 11',
      img12:'assets/img/galeria-momentos-carmelita/rincon-carmelita/12.png',
      alt12:'Foto en el rincón de Rompope Carmelita 12',
      img13:'assets/img/galeria-momentos-carmelita/rincon-carmelita/13.png',
      alt13:'Foto en el rincón de Rompope Carmelita 13',
      img14:'assets/img/galeria-momentos-carmelita/rincon-carmelita/14.png',
      alt14:'Foto en el rincón de Rompope Carmelita 14',
      img15:'assets/img/galeria-momentos-carmelita/rincon-carmelita/15.png',
      alt15:'Foto en el rincón de Rompope Carmelita 15',
      img16:'assets/img/galeria-momentos-carmelita/rincon-carmelita/16.png',
      alt16:'Foto en el rincón de Rompope Carmelita 16',
      img17:'assets/img/galeria-momentos-carmelita/rincon-carmelita/17.png',
      alt17:'Foto en el rincón de Rompope Carmelita 17',
    },
    {
      album: 'Conferencia en Vainilla y Chocolate',
      portada: 'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/3.png',
      descportada: 'Portada de conferencia en Vainilla y Chocolate',
      img1: 'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/1.png',
      alt1:'Foto de conferencia en Vainilla y Chocolate 1',
      img2: 'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/2.png',
      alt2:'Foto de conferencia en Vainilla y Chocolate 2',
      img3:'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/3.png',
      alt3:'Foto de conferencia en Vainilla y Chocolate 3',
      img4: 'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/4.png',
      alt4:'Foto de conferencia en Vainilla y Chocolate 4',
      img5:'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/5.png',
      alt5:'Foto de conferencia en Vainilla y Chocolate 5',
      img6: 'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/6.png',
      alt6:'Foto de conferencia en Vainilla y Chocolate 6',
      img7:'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/7.png',
      alt7:'Foto de conferencia en Vainilla y Chocolate 7',
      img8:'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/8.png',
      alt8:'Foto de conferencia en Vainilla y Chocolate 8',
      img9:'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/9.png',
      alt9:'Foto de conferencia en Vainilla y Chocolate 9',
      img10:'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/10.png',
      alt10:'Foto de conferencia en Vainilla y Chocolate 10',
      img11:'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/11.png',
      alt11:'Foto de conferencia en Vainilla y Chocolate 11',
      img12:'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/12.png',
      alt12:'Foto de conferencia en Vainilla y Chocolate 12',
      img13:'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/13.png',
      alt13:'Foto de conferencia en Vainilla y Chocolate 13',
      img14:'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/14.png',
      alt14:'Foto de conferencia en Vainilla y Chocolate 14',
      img15:'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/15.png',
      alt15:'Foto de conferencia en Vainilla y Chocolate 15',
      img16:'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/16.png',
      alt16:'Foto de conferencia en Vainilla y Chocolate 16',
      img17:'assets/img/galeria-momentos-carmelita/conferencia-vainilla-chocolate/17.png',
      alt17:'Foto de conferencia en Vainilla y Chocolate 17',
    },
    {
      album: 'Ganadoras concurso Carmelita',
      portada: 'assets/img/galeria-momentos-carmelita/ganadoras/6.png',
      descportada: 'Portada de ganadoras del concurso de Rompope Carmelita',
      img1: 'assets/img/galeria-momentos-carmelita/ganadoras/1.png',
      alt1:'Foto de ganadoras del concurso de Rompope Carmelita 1',
      img2: 'assets/img/galeria-momentos-carmelita/ganadoras/2.png',
      alt2:'Foto de ganadoras del concurso de Rompope Carmelita 2',
      img3:'assets/img/galeria-momentos-carmelita/ganadoras/3.png',
      alt3:'Foto de ganadoras del concurso de Rompope Carmelita 3',
      img4: 'assets/img/galeria-momentos-carmelita/ganadoras/4.png',
      alt4:'Foto de ganadoras del concurso de Rompope Carmelita 4',
      img5:'assets/img/galeria-momentos-carmelita/ganadoras/5.png',
      alt5:'Foto de ganadoras del concurso de Rompope Carmelita 5',
      img6: 'assets/img/galeria-momentos-carmelita/ganadoras/6.png',
      alt6:'Foto de ganadoras del concurso de Rompope Carmelita 6',
      img7:'assets/img/galeria-momentos-carmelita/ganadoras/7.png',
      alt7:'Foto de ganadoras del concurso de Rompope Carmelita 7',
      img8:'assets/img/galeria-momentos-carmelita/ganadoras/8.png',
      alt8:'Foto de ganadoras del concurso de Rompope Carmelita 8',
      img9:'assets/img/galeria-momentos-carmelita/ganadoras/9.png',
      alt9:'Foto de ganadoras del concurso de Rompope Carmelita 9',
      img10:'assets/img/galeria-momentos-carmelita/ganadoras/10.png',
      alt10:'Foto de ganadoras del concurso de Rompope Carmelita 10',
      img11:'assets/img/galeria-momentos-carmelita/ganadoras/11.png',
      alt11:'Foto de ganadoras del concurso de Rompope Carmelita 11',
      img12:'assets/img/galeria-momentos-carmelita/ganadoras/12.png',
      alt12:'Foto de ganadoras del concurso de Rompope Carmelita 12',
      img13:'assets/img/galeria-momentos-carmelita/ganadoras/13.png',
      alt13:'Foto de ganadoras del concurso de Rompope Carmelita 13',
      img14:'assets/img/galeria-momentos-carmelita/ganadoras/14.png',
      alt14:'Foto de ganadoras del concurso de Rompope Carmelita 14',
      img15:'assets/img/galeria-momentos-carmelita/ganadoras/15.png',
      alt15:'Foto de ganadoras del concurso de Rompope Carmelita 15',
      img16:'assets/img/galeria-momentos-carmelita/ganadoras/16.png',
      alt16:'Foto de ganadoras del concurso de Rompope Carmelita 16',
      img17:'assets/img/galeria-momentos-carmelita/ganadoras/17.png',
      alt17:'Foto de ganadoras del concurso de Rompope Carmelita 17',
    },
    {
      album: 'Playa 2020 Equipo Carmelita',
      portada: 'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/portada-playa.png',
      descportada: 'Portada de la playa con el Equipo Carmelita',
      img1: 'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/1.png',
      alt1:'Foto de la playa con el Equipo Carmelita 1',
      img2: 'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/2.png',
      alt2:'Foto de la playa con el Equipo Carmelita 2',
      img3:'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/3.png',
      alt3:'Foto de la playa con el Equipo Carmelita 3',
      img4: 'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/4.png',
      alt4:'Foto de la playa con el Equipo Carmelita 4',
      img5:'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/5.png',
      alt5:'Foto de la playa con el Equipo Carmelita 5',
      img6: 'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/6.png',
      alt6:'Foto de la playa con el Equipo Carmelita 6',
      img7:'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/7.png',
      alt7:'Foto de la playa con el Equipo Carmelita 7',
      img8:'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/8.png',
      alt8:'Foto de la playa con el Equipo Carmelita 8',
      img9:'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/9.png',
      alt9:'Foto de la playa con el Equipo Carmelita 9',
      img10:'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/10.png',
      alt10:'Foto de la playa con el Equipo Carmelita 10',
      img11:'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/11.png',
      alt11:'Foto de la playa con el Equipo Carmelita 11',
      img12:'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/12.png',
      alt12:'Foto de la playa con el Equipo Carmelita 12',
      img13:'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/13.png',
      alt13:'Foto de la playa con el Equipo Carmelita 13',
      img14:'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/14.png',
      alt14:'Foto de la playa con el Equipo Carmelita 14',
      img15:'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/15.png',
      alt15:'Foto de la playa con el Equipo Carmelita 15',
      img16:'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/portada-playa.png',
      alt16:'Foto de la playa con el Equipo Carmelita 16',
      img17:'assets/img/galeria-momentos-carmelita/playa-2020-equipo-carmelita/17.png',
      alt17:'Foto de la playa con el Equipo Carmelita 17',
    },
    {
      album: 'Posada Playa 2020',
      portada: 'assets/img/galeria-momentos-carmelita/posada-playa-2020/6.png',
      descportada: 'Portada de la posada en la playa',
      img1: 'assets/img/galeria-momentos-carmelita/posada-playa-2020/1.png',
      alt1:'Foto de la posada en la playa 1',
      img2: 'assets/img/galeria-momentos-carmelita/posada-playa-2020/2.png',
      alt2:'Foto de la posada en la playa 2',
      img3:'assets/img/galeria-momentos-carmelita/posada-playa-2020/3.png',
      alt3:'Foto de la posada en la playa 3',
      img4: 'assets/img/galeria-momentos-carmelita/posada-playa-2020/4.png',
      alt4:'Foto de la posada en la playa 4',
      img5:'assets/img/galeria-momentos-carmelita/posada-playa-2020/5.png',
      alt5:'Foto de la posada en la playa 5',
      img6: 'assets/img/galeria-momentos-carmelita/posada-playa-2020/6.png',
      alt6:'Foto de la posada en la playa 6',
      img7:'assets/img/galeria-momentos-carmelita/posada-playa-2020/7.png',
      alt7:'Foto de la posada en la playa 7',
      img8:'assets/img/galeria-momentos-carmelita/posada-playa-2020/8.png',
      alt8:'Foto de la posada en la playa 8',
      img9:'assets/img/galeria-momentos-carmelita/posada-playa-2020/9.png',
      alt9:'Foto de la posada en la playa 9',
      img10:'assets/img/galeria-momentos-carmelita/posada-playa-2020/10.png',
      alt10:'Foto de la posada en la playa 10',
      img11:'assets/img/galeria-momentos-carmelita/posada-playa-2020/11.png',
      alt11:'Foto de la posada en la playa 11',
      img12:'assets/img/galeria-momentos-carmelita/posada-playa-2020/12.png',
      alt12:'Foto de la posada en la playa 12',
      img13:'assets/img/galeria-momentos-carmelita/posada-playa-2020/13.png',
      alt13:'Foto de la playa con el Equipo Carmelita 13',
      img14:'assets/img/galeria-momentos-carmelita/posada-playa-2020/14.png',
      alt14:'Foto de la posada en la playa 14',
      img15:'assets/img/galeria-momentos-carmelita/posada-playa-2020/15.png',
      alt15:'Foto de la posada en la playa 15',
      img16:'assets/img/galeria-momentos-carmelita/posada-playa-2020/16.png',
      alt16:'Foto de la posada en la playa 16',
      img17:'assets/img/galeria-momentos-carmelita/posada-playa-2020/17.png',
      alt17:'Foto de la posada en la playa 17',
    },
  ]

  constructor() { }
  obtenerMomento(){
    return this.momentosc;
  }
  obtenerVistaMomento(i){
    return this.momentosc[i];
  }
}
