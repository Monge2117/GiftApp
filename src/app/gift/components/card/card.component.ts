import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interface/gift.interface';

@Component({
  selector: 'gift-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit{
  @Input()
  giftObject!:Result;

  ngOnInit(): void {
    if(!this.giftObject) throw new Error('la propiedad gift es obligatoria');

  }
}
