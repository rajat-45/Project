import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
 token= 1234;
  constructor(private service: LoginService, private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(token:any){
    // this.service.tokenCheck(token).subscribe(
    //   e=> {console.log(e)})
      if(this.token=token){
        console.log("success");
        this.route.navigate(['main'])
      }
        
      
    
    
  }

}
