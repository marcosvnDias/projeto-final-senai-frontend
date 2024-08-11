import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MenuComponent } from "../menu/menu.component";
import { User } from '../shared/interfaces/user.interface';
import { UsersService } from '../shared/services/users.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/components/card/card.component';
import { Class } from '../shared/interfaces/classes.interface';
import { Nota } from '../shared/interfaces/nota.interface';

@Component({
  selector: 'app-notas-aluno',
  standalone: true,
  imports: [ToolbarComponent, MenuComponent, CardComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './notas-aluno.component.html',
  styleUrl: './notas-aluno.component.css'
})
export class NotasAlunoComponent implements OnInit {
  userAluno:User[] = [];
  classeAluno!:Class;
  notaAluno:Nota[] = [];
  userSelected!:User;

  constructor(private usersService: UsersService) {

  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe((data) => {
      data.map((user) => {
        if (user.tipoPerfil == "docente") {
          this.userAluno.push(user);
        }
      });
    })
    this.userSelected = this.usersService.getUserSelected();

    this.usersService.getAllClasses().subscribe((data) => {
      data.map((classe) => {
        classe.alunos.map((aluno) => {
          if (aluno.cpf == this.userSelected.cpf) {
            this.classeAluno = classe;
            this.notaAluno = aluno.notas;
          }
        });
      })
      console.log(this.classeAluno)
      console.log(this.notaAluno)
    })
  }
}
