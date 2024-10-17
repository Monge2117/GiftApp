import { Component } from '@angular/core';
import { GiftService } from '../../gift/services/gift.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
constructor(private GiftService:GiftService){}

get tags(){
  return this.GiftService.TagHistory;
}

Buscar(tag:string){
this.GiftService.searchTag(tag);
}
}
