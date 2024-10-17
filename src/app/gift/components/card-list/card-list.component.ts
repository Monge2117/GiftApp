import { Component, Input } from '@angular/core';
import { Result } from '../../interface/gift.interface';

@Component({
  selector: 'gift-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input()
  public giftsRickMorty:Result[]=[];

}
