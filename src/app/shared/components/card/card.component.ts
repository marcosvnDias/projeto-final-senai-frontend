import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { hugeUserIdVerification } from '@ng-icons/huge-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({hugeUserIdVerification})],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  tipo!: string;

  @Input()
  number?: number;

  @Input()
  title?: string;

  @Input()
  name?: string;

  @Input()
  phone?: string;
  
  @Input()
  age?: number;

  @Input()
  profile?: string;
}
