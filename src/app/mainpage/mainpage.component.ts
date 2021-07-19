import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
 @Input() totalBalance=1234;
 @Input() income=200;
 @Input() expense=300;
 @Input() totalBill=1234;
 @Input() saving=1234;

  constructor(private route:Router) {
   
   }

  
  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('user');
    this.route.navigate(['login']);
  }

  send(){
    this.route.navigate(['send']);
  }

}
