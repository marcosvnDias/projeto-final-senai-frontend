import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { hugeMenu01 } from '@ng-icons/huge-icons';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  providers: [provideIcons({hugeMenu01})],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  status = "hidden-menu";

  mudarStatus() {
    if (this.status == "hidden-menu") {
      this.status = "container-menu";
    } else {
      this.status = "hidden-menu";
    }
  }
}
