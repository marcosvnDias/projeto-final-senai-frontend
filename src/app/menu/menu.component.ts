import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { hugeMenu01 } from '@ng-icons/huge-icons';
import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/interfaces/user.interface';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgIconComponent, CommonModule, RouterModule],
  providers: [provideIcons({hugeMenu01})],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  status = "hidden-menu";
  usuarioLogado!: User;

  constructor(private usersService: UsersService, private router: Router) {

  }

  ngOnInit() {
    this.usuarioLogado = this.usersService.getUserSelected();
  }

  mudarStatus() {
    if (this.status == "hidden-menu") {
      this.status = "container-menu";
    } else {
      this.status = "hidden-menu";
    }
  }

  sair() {
    this.usersService.removerUserSelected();
    this.router.navigate(["/login"]);
  }
}
