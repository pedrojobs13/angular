import {Component, inject, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ClientService} from '../../services/client.service';
import {APIResponseModel, ClientProject, Employee} from '../../model/interface/role';
import {Client} from '../../model/class/Client';
import {Observable} from "rxjs";
import {AsyncPipe, DatePipe} from "@angular/common";


@Component({
    selector: 'app-client-project',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AsyncPipe,
        DatePipe
    ],
    templateUrl: './client-project.component.html',
    styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
    projectForm: FormGroup = new FormGroup({
        clientProjectId: new FormControl(0),
        projectName: new FormControl('', [Validators.required, Validators.minLength(6)]),
        startDate: new FormControl(''),
        expectedEndDate: new FormControl(''),
        leadByEmpId: new FormControl(''),
        completedDate: new FormControl(''),
        contactPerson: new FormControl(''),
        contactPersonContactNo: new FormControl(''),
        totalEmpWorking: new FormControl(''),
        projectCost: new FormControl(''),
        projectDetails: new FormControl(''),
        contactPersonEmailId: new FormControl(''),
        clientId: new FormControl("")
    })

    clientSrv = inject(ClientService)
    employeeList: Employee[] = [];
    clientList: Client[] = [];
    userList$: Observable<any> = new Observable<any>;
    projectList = signal<ClientProject[]>([])

    ngOnInit(): void {
        this.getAllClient();
        this.getAllEmployee();
        this.userList$ = this.clientSrv.getAllUsers();
        this.getAllClientProject();
    }

    getAllEmployee() {
        this.clientSrv.getAllEmployee().subscribe((res: APIResponseModel) => {
            this.employeeList = res.data;
        })
    }

    getAllClient() {
        this.clientSrv.getAllClients().subscribe((res: APIResponseModel) => {
            this.clientList = res.data;
        })
    }

    getAllClientProject() {
        this.clientSrv.getAllClientsProject().subscribe((res: APIResponseModel) => {
            this.projectList.set(res.data);
        })
    }

    onSaveProject() {
        const formValue = this.projectForm.value;
        debugger;
        this.clientSrv.addClientProjectUpdate(formValue).subscribe((res: APIResponseModel) => {
            if (res.result) {
                alert('Project Create')
            } else {
                alert(res.message)
            }
        })
    }

}
