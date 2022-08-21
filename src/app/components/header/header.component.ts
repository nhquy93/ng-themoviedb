import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserInfo } from 'src/app/models/user-info.model';
import { GoogleApiService } from 'src/app/services/google-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() emitter = new EventEmitter();
  isLoggedIn: boolean = false;

  constructor(private readonly googleApi: GoogleApiService) {
    googleApi.isLoggedIn$.subscribe((isLoggedIn) => {
      console.log(isLoggedIn);
      this.isLoggedIn = isLoggedIn
    });
  }

  ngOnInit(): void {}

  openModal() {
    this.emitter.emit();
  }

  signOut(): void {
    this.googleApi.signOut();
  }
}
