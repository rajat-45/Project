import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { LoginService } from '../login.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;


  
  constructor(private router: Router, private service:LoginService) { }

  ngOnInit(): void {
  }
  
  onSubmit(data:any){
   //console.log(data.username, data.password);
    this.service.loginCheck(data.username,data.password).subscribe(e=>{
      console.log(e);
      localStorage.setItem('user',data.username);
      this.router.navigate(['main']);
    },
    e=>{console.error("login failed");
    this.router.navigate(['login']);
    alert("Plese enter correct email and password");
  });
   
      
     
     
    
   
   
 
  }

}
