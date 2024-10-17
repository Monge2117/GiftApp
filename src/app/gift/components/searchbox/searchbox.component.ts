
import { Component, ElementRef, ViewChild} from '@angular/core';
import { GiftService } from '../../services/gift.service';

@Component({
  selector: 'gift-searchbox',
  template:`<h5>Buscar</h5>
            <input class="form-control"
             type="text" placeholder="buscar gift..."
             (keyup.enter)="searchTag()"
             #txtBuscar>
         `
})

export class SearchboxComponent {
  @ViewChild('txtBuscar')
  inputbuscar!:ElementRef<HTMLInputElement>;
  constructor(private GiftService:GiftService) { }

  searchTag(){
      const ValorBuscado = this.inputbuscar.nativeElement.value;
    this.GiftService.searchTag(ValorBuscado);
    this.inputbuscar.nativeElement.value = '';
  }
}
