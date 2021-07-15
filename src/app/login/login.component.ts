import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    tel: new FormControl()
  });

   name = 'Ragini';
   pass:string='Ragini';
  constructor(private router: Router, private service:LoginService) { }

  ngOnInit(): void {
  }
  
  onSubmit(data : any){
   if(data.username==this.name && data.password==this.pass){
    this.router.navigate(['token'])
   }
  //  this.service.loginCheck(data).subscribe(e=>console.log(e));
  //   console.log(data);
 
  }

}
