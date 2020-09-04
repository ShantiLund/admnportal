import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import{AuthorizationService} from '../services/authorization/authorization.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm:FormGroup;
  submitted = false;
  
  constructor(private signupService:AuthorizationService, private router:Router) {
    if(sessionStorage.getItem('auth_token')){
      this.router.navigate(['/']);
    }
   }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      email: new FormControl('',Validators.email),
      contactNumber: new FormControl('',Validators.required)
    })
  }
  get f() {
    return this.signupForm.controls;
  }
  signup(){
    this.submitted=true
    if (this.signupForm.invalid) {
      return;
    }
    let payload={
      name: this.signupForm.controls.firstName.value+" "+this.signupForm.controls.lastName.value,
      email: this.signupForm.controls.email.value,
      password: this.signupForm.controls.password.value,
     // role: this.signupForm.controls.role.value,
     // contactNumber: this.signupForm.controls.contactNumber.value
    }
    this.signupService.signup(payload).subscribe(
      res=>{
        this.router.navigate(['/signin']);
        console.log(res);
      },
      err=>{
        console.log(err);
      });
    console.log(payload);
  }
  
}

