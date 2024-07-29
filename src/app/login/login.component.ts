import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MenssageComponent } from "../shared/components/menssage/menssage.component";
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from "../toolbar/toolbar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MenssageComponent, CommonModule, ToolbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  usuarios!: User[]; 
  email = ""
  senha = ""
  aviso = false

  status = {
    email: "",
    senha: ""
  }

  constructor(private usersService: UsersService, private router: Router) {
  }
  ngOnInit(): void {
    this.usersService.getAll().subscribe((data) => {
      this.usuarios = data;
    })

    console.log(this.usuarios)
  }

  entrar() {
    let temCampoVazio = this.verificarSeCampoVazio();
    if (!temCampoVazio) {
      const usuarioSelecionado = this.usuarios.find(usuario => usuario.email === this.email);
      if (usuarioSelecionado && usuarioSelecionado.senha === this.senha) {
        this.usersService.postUserSelected(usuarioSelecionado);
        this.router.navigate(["/home"]);
      } else {
        alert("Dados incorretos");
      }
    }
    console.log(this.usersService.userSelected);
  }

  tornarCampoNormal() {
    if (this.email) {
      this.status.email = "";
    } 
    if (this.senha) {
      this.status.senha = "";
    } 
  }

  verificarSeCampoVazio() {
    let camposVazios = [];
    if (!this.email) {
      this.status.email = "input-invalid";
      camposVazios.push("email");
    } else {
      this.status.email = "";
    }

    if (!this.senha) {
      this.status.senha = "input-invalid";
      camposVazios.push("senha");
    } else {
      this.status.senha = "";
    }

    if (camposVazios.length > 0) {
      alert("Algum campos está vazio (" + camposVazios.join(" - ") + ")")
      return true;
    } else {
      return false;
    }
  }

  mandarAviso() {
    this.aviso = true;

    setTimeout(() => {
      this.aviso = false
    }, 3000)
  }
  
}
