import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, MicrosoftLoginProvider, SocialAuthService } from 'angularx-social-login';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title: String | null;
  GoogleLoginProvider = GoogleLoginProvider;
  constructor(public modalRef: MdbModalRef<LoginComponent>,private socialAuthService:SocialAuthService ) {}

  ngOnInit(): void {}

  signInWithGoogle() {
    this.modalRef.close();
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  loginWithFacebook(): void {
    this.modalRef.close();
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  loginWithMicrosoft(): void {
    this.modalRef.close();
    this.socialAuthService.signIn(MicrosoftLoginProvider.PROVIDER_ID);
  }
}
