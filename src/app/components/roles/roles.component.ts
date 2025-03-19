import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {IRole} from '../../model/interface/role';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles")
      .subscribe((res: any) => {
        this.roleList = res.data;

        this.roleList.forEach((role) => console.log(role.role));
      })
  }

  //string, number, boolean, object, array, function, any
  firstName: string = 'John';

  version: number = 1.0;

  isActive: boolean = false;

  currentDate: Date = new Date();
  inputType: string = 'radio';

  selectText = ''

  showWelcomeMessage() {
    alert("Welcome to Angular 18");
  }

  showMessage(message: string) {
    alert(message);
  }
}
