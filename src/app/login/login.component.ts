import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.username === 'Admin' && this.form.password === 'admin1') {
      this.router.navigate([`/books`]);
    }
    else {
      this.isLoginFailed = true;
    }
  }

  reloadPage() {
    window.location.reload();
  }
}
