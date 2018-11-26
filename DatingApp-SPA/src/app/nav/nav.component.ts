import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, private altertify: AlertifyService) { }

  // tslint:disable-next-line:no-trailing-whitespace
  ngOnInit() { 
  }

  login(form: NgForm) {
    this.authService.login(form.value).subscribe(next => {
      this.altertify.success('logged in sucessfully')
    }, error => {
      this.altertify.error(error);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.altertify.message('logged out');
  }

}
