import { Component } from '@angular/core';
import { GiftService } from '../../services/gift.service';
import { Result } from '../../interface/gift.interface';

@Component({
  selector: 'gift-homePage',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private giftService:GiftService){};

  get Getgifts():Result[]{
    return this.giftService.giftList;
  }
 }
