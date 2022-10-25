import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  user: SocialUser | undefined;
  title: String | null;
  avatar='data:image/jpeg;base64,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';
  constructor(public modalRef: MdbModalRef<UserInfoComponent>, private _authService: SocialAuthService) { }

  ngOnInit(): void {
    this._authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      if (user) {
        if (user.provider == "GOOGLE") {
          this.avatar = user.photoUrl;
        }
        if (user.provider == "FACEBOOK") {
          this.avatar = user.response.picture.data.url;
        }
        if (user.provider == "MICROSOFT" && user.photoUrl) {
          this.avatar = user.photoUrl;
        }
      }
    });
  }
  logOut(){
    this._authService.signOut();
    window.location.reload();
  }

}
