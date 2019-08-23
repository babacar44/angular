import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private service : EmployeeService) { }

  employee : Employee[];

  ngOnInit() {
    this.service.list().subscribe(
      (data)=>{
      this.employee = data;
      // console.log(this.employee);
    })

    }

}
