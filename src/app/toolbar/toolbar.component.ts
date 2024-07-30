import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { hugeUserCircle02 } from '@ng-icons/huge-icons';
import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  providers: [provideIcons({hugeUserCircle02})],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  usuarioLogado!: User;

  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    this.usuarioLogado = this.usersService.getUserSelected();
  }


}

