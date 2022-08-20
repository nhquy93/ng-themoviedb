import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { GoogleApiService } from 'src/app/services/google-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title: String | null;

  constructor(
    public modalRef: MdbModalRef<LoginComponent>,
    private readonly googleApi: GoogleApiService
  ) {}

  ngOnInit(): void {}

  signInWithGoogle() {
    this.googleApi.signInWithGoogle();
  }

  signOut() {}
}
