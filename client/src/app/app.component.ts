import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient){}
  title = 'client';
  users:any;

  ngOnInit() {
   this.getusers();
  }
  getusers(){
    return this.http.get('https://localhost:5001/api/users').subscribe(response=>{
      this.users = response;
    }), (error: any)=>{
      console.log(error);
      
    }
  }
}
