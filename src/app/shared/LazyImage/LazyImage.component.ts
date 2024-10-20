import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './LazyImage.component.html',
  styleUrl: './LazyImage.component.css',
})
export class LazyImageComponent implements OnInit {
  @Input()
  Url!:string

  @Input()
  alt:string = ''

  public hasLoaded:boolean = false;

  loading(){
    this.hasLoaded = true;
  }
  ngOnInit(): void {
    if (!this.Url) {
      throw new Error('url es obligatorio');

    }
  }


}
