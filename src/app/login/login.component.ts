import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
   user =new User();
   msg='';
constructor(private _service :RegistrationService ,private _router :Router){

}
ngOnInit(): void {
    
}
loginUser(){
  
 this._service.loginUserFromRemote(this.user ).subscribe(
  data=>{
    console.log("response receive");
    this._router.navigate(['/loginsuccess'])
    } ,
  error=>{
    console.log("exception ");
    this.msg="Mauvaises informations d'identification, veuillez entrer une adresse e-mail et un mot de passe valides";
  }
 )
}

gotoregstration(){
  this._router.navigate(['/registration'])

}

}
