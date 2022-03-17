import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {SignUpForm} from '../../model/SignUpForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  signUpForm: SignUpForm;
  errorUser: any = {
    message: 'Tài khoản đã tồn tại'
  };

  errorEmail: any = {
    message: 'Email đã tồn tại'
  };

  success: any = {
    message: 'Đăng kí thành công'
  };

  status = 'Nhập thông tin của bạn';


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    );
    this.authService.signUp(this.signUpForm).subscribe((data) => {
      if (JSON.stringify(data) == JSON.stringify(this.errorUser)) {
        this.status = 'Tài khoản đã tồn tại';
      }
      if (JSON.stringify(data) == JSON.stringify(this.errorEmail)) {
        this.status = 'Email đã tồn tại';
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)) {
        this.status = 'Đăng kí thành công';
      }
    });
  }
}
