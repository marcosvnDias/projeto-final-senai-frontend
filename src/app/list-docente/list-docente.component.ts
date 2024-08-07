import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { MenuComponent } from "../menu/menu.component";
import { CardComponent } from "../shared/components/card/card.component";
import { CommonModule } from '@angular/common';
import { User } from '../shared/interfaces/user.interface';
import { UsersService } from '../shared/services/users.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-docente',
  standalone: true,
  imports: [ToolbarComponent, MenuComponent, CardComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './list-docente.component.html',
  styleUrl: './list-docente.component.css'
})
export class ListDocenteComponent implements OnInit{
  usersDocente:User[] = [];

  userSelected!:User
  searchValue: string = '';
  usersDocenteSearch:User[] = [];
  hasContent: boolean = true;

  constructor(private usersService: UsersService, private router: Router) {

  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe((data) => {
      data.map((user) => {
        if (user.tipoPerfil == "docente") {
          this.usersDocente.push(user);
        }
      });

      this.usersDocenteSearch = this.usersDocente;
    })

    this.userSelected = this.usersService.getUserSelected();
  }

  filtrarDocente() {
    this.usersDocenteSearch = this.usersDocente;
    let usersDocenteSearch:User[] = [];

    this.usersDocente.forEach(docente => {
      if (docente.nome.toLocaleLowerCase().indexOf(this.searchValue.toLocaleLowerCase()) > -1) {
        usersDocenteSearch.push(docente);
      } else if (docente.id.toString().indexOf(this.searchValue) > -1) {
        usersDocenteSearch.push(docente);
      }
    });

    console.log(usersDocenteSearch);
    if (usersDocenteSearch.length == 0) {
      this.hasContent = false;
      this.usersDocenteSearch = usersDocenteSearch;
    } else {
      this.hasContent = true;
      this.usersDocenteSearch = usersDocenteSearch;
    }
  }
}
