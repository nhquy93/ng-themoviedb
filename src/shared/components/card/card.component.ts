import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'shared/enums';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() category: string;
  @Input() item: any
  btnIcon = `<i class="fa-solid fa-play"></i>`;
  env = environment.apiConfig;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  bgImg(image: any) {
    let _url = image ? this.env.w500Image(image) : 'assets/poster-not-found.png';
    return {
      'background-image': `url(${_url})`
    };
  }

  gotoDetail(id: number) {
    this._router.navigate(['', Category[this.category], id]);
  }

}
