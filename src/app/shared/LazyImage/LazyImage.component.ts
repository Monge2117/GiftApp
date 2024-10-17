import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './LazyImage.component.html',
  styleUrl: './LazyImage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyImageComponent { }
