import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import{AuthorizationService} from '../services/authorization/authorization.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public signinForm:FormGroup;
  submitted = false;
  constructor(private signinService:AuthorizationService, private router: Router) {
    if(sessionStorage.getItem('auth_token')){
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(7)])
    });
  }
  get f() {
    return this.signinForm.controls;
  }

  signin(){
    this.submitted=true
    console.log("Here");
    if (this.signinForm.invalid) {
      return;
  }

 // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signinForm.value))

   
    let payload = {
      email: this.signinForm.controls.email.value,
      password: this.signinForm.controls.password.value
    }
    this.signinService.login(payload).subscribe(res=>{
      console.log(res);
      sessionStorage.setItem("auth_token",res.token);
      sessionStorage.setItem("role",res.role);
      sessionStorage.setItem("email",payload.email);
      this.router.navigate(['/']);
    },
    err=>{
      console.log(err);
    });
    console.log("signin payload:",payload);
    
  }


}
