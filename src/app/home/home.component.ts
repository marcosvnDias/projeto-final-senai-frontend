import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MenuComponent } from "../menu/menu.component";
import { CardComponent } from "../shared/components/card/card.component";
import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/interfaces/user.interface';
import { Class } from '../shared/interfaces/classes.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolbarComponent, MenuComponent, CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  usersDocente:User[] = [];
  usersAluno:User[] = [];
  classes:Class[] = [];

  userSelected!:User

  constructor(private usersService: UsersService) {

  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe((data) => {
      data.map((user) => {
        switch (user.tipoPerfil) {
          case "docente":
            this.usersDocente.push(user);
            break;
          case "aluno":
            this.usersAluno.push(user);
            break;
        }
      });
      // console.log(this.usersDocente);
      // console.log(this.usersAluno);
    })

    this.usersService.getAllClasses().subscribe((data) => {
      this.classes = data;
      // console.log(this.classes)
    })

    this.userSelected = this.usersService.getUserSelected();

  }

}
