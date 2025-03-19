import {Component, inject, OnInit} from '@angular/core';
import {MasterService} from '../../services/master.service';
import {APIResponseModel, IDesignation} from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  masterService = inject(MasterService);
  designationList: IDesignation[] = [];


  ngOnInit() {
    this.masterService.getDesignation().subscribe((resul: APIResponseModel) => {
      this.designationList = resul.data;
    }, error => {
      alert("Api error/ Network down")
    })
  }
}
