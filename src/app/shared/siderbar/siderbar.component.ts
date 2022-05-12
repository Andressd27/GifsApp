import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styles: [
  ]
})
export class SiderbarComponent {

  get historial () {
    return this.gifsService.historial;
  }
  
  constructor( private gifsService: GifsService ) { }

}
