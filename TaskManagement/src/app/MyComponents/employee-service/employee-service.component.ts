import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/employee';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-employee-service',
  templateUrl: './employee-service.component.html',
  styleUrls: ['./employee-service.component.css']
})
export class EmployeeServiceComponent implements OnInit {

  public employees: IEmployee[]
    // public errorMsg:any;
    = [];
 // public errorMsg:any;


  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit(){
    this.employeeService.getEmployees().subscribe(
      data=> this.employees = data
      // error=>this.errorMsg=error
    );
  }

}
