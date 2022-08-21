import { Component } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LoginComponent } from 'src/app/components/login/login.component';
import { GoogleApiService } from 'src/app/services/google-api.service';
import { configOAuthGoogle } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-themoviedb';

  modalRef: MdbModalRef<LoginComponent> | null = null;
  config = {
    animation: true,
    backdrop: false,
    containerClass: 'center',
    data: {
      title: 'OAuth Demo Dialog',
    },
    ignoreBackdropClick: false,
    keyboard: true,
    modalClass: 'modal-dialog-centered',
  };

  constructor(
    private readonly googleApi: GoogleApiService,
    private modalService: MdbModalService,
    ) {}

  openModal() {
    this.modalRef = this.modalService.open(LoginComponent, this.config);
    this.modalRef.onClose.subscribe(isSignIn => {
      if(isSignIn) {
        this.googleApi.signInWithGoogle();
      }
    })
  }
}
