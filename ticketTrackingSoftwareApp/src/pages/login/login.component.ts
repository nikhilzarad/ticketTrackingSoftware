import { Component, inject } from '@angular/core';
import { CommonInterface } from '../../interfaces/common-interface';
import { LoginServiceService } from '../../services/login-service.service';
import { core } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:CommonInterface = {
    'emailId' : '',
    'password': ''
  }
loginSrc = inject(LoginServiceService)
router = inject(Router);
onLogin(){
  debugger
  this.loginSrc.loginData(this.loginObj).subscribe((res:any)=>{
    if ( res.result){
      localStorage.setItem('loginInfo',JSON.stringify(res.data));
      this.router.navigateByUrl('dashboard');
    }else{
      alert(res.message);
    }

  })
}
}
