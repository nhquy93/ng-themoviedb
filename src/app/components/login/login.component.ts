import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title: String | null;

  constructor(public modalRef: MdbModalRef<LoginComponent>) {}

  ngOnInit(): void {}

  signInWithGoogle() {}

  signOut() {}
}
