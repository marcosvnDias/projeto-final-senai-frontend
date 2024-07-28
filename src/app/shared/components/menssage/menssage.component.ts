import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menssage',
  standalone: true,
  imports: [],
  templateUrl: './menssage.component.html',
  styleUrl: './menssage.component.css'
})
export class MenssageComponent {
  @Input() status?:string
  @Input() menssage!:string
}
