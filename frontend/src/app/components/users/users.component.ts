import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  usuarios: any[] = [];

  constructor (
    private usersService: UsersService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usersService.getUsuarios().subscribe(
      result => {
        console.log(result)
        this.usuarios = result;
      }
    )
  }

  // registrarAlquiler() {
  //   this.router.navigate('/formulario');
  // }

  // modificarAlquiler(alquilerId: string) {
  //   this.router.navigate('formulario', alquilerId);
  // }
}
