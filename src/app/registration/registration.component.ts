import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  user = new User();
  msg = {status: null, message: ''};
  
constructor(private _service : RegistrationService , private  _router :Router){}
ngOnInit(): void {
    
}
registeruser(){
  this._service.registerUserFromRemote(this.user).subscribe(
    data =>  {
      console.log("response receive");
      this._router.navigate(['/login'])
      } ,
    error => {
      console.log("exception ");
      this.msg=error.error;
    }

  )
}
}
