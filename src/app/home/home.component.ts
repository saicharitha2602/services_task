import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any;
 data:any;
  
  constructor(private usersinfoservices:UsersService) { }

  ngOnInit(): void {
    this.usersinfoservices.getAllUsers().subscribe((data: any)=>{
      ;
      this.users=data;
      console.warn("data",data);
    });
      
  }

}
