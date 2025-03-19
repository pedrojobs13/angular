import {Component, inject, OnInit} from '@angular/core';
import {Client} from '../../model/class/Client';
import {FormsModule} from '@angular/forms';
import {ClientService} from '../../services/client.service';
import {APIResponseModel} from '../../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveClient() {
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Client created success")
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert("Error")
      }
    })
  }

  onEdit(data: Client) {
    this.clientObj = data;
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure that your delete");
    if (isDelete) {
      this.clientService.deleteClientById(id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert("Client created success")
          this.loadClient();
          this.clientObj = new Client();
        } else {
          alert("Error")
        }
      })
    }
  }
}
