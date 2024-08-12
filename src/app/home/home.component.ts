import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MenuComponent } from "../menu/menu.component";
import { CardComponent } from "../shared/components/card/card.component";
import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/interfaces/user.interface';
import { Class } from '../shared/interfaces/classes.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToolbarComponent, MenuComponent, CardComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  usersDocente:User[] = [];
  usersAluno:User[] = [];
  classes:Class[] = [];

  userSelected!:User
  searchValue: string = '';
  usersAlunoSearch:User[] = [];
  hasContent: boolean = true;

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
      this.usersAlunoSearch = this.usersAluno;
    })

    this.usersService.getAllClasses().subscribe((data) => {
      this.classes = data;
    })
    
    this.userSelected = this.usersService.getUserSelected();
    console.log(this.userSelected)
  }

  filtrarAluno() {
    this.usersAlunoSearch = this.usersAluno;
    let usersAlunoFilted:User[] = [];

    this.usersAluno.forEach(aluno => {
      if (aluno.nome.toLocaleLowerCase().indexOf(this.searchValue.toLocaleLowerCase()) > -1) {
        usersAlunoFilted.push(aluno);
      } else if (aluno.telefone.toLocaleLowerCase().indexOf(this.searchValue.toLocaleLowerCase()) > -1) {
        usersAlunoFilted.push(aluno);
      }
    });

    console.log(usersAlunoFilted);
    if (usersAlunoFilted.length == 0) {
      this.hasContent = false;
      this.usersAlunoSearch = usersAlunoFilted;
    } else {
      this.hasContent = true;
      this.usersAlunoSearch = usersAlunoFilted;
    }
  }

}
