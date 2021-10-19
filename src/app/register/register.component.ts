import { Component, OnInit } from '@angular/core';
import { ApiConnService } from '../service/api-conn.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data = { 
    uName: "",
    uPass : ""
  }

  constructor(
    private rData:ApiConnService,
    private gData:ApiConnService,
    ) { }

  ngOnInit(): void { 

  }

  submitFun() {
    this.rData.registerData(this.data).subscribe(
      response => { console.log("ok") },
      error => { console.log("failed") }
    );
  }

  getFun() {
    this.gData.getData().subscribe(
      response => { console.log("ok2") },
      error => { console.log("failed2") }
    );
  }

}
