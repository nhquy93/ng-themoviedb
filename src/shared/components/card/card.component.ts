import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: any
  btnIcon = `<i class="fa-solid fa-play"></i>`;
  env = environment.apiConfig;

  constructor() { }

  ngOnInit(): void {
  }

  bgImg(image: any) {
    let _url = image ? this.env.w500Image(image) : 'assets/poster-not-found.png';
    console.log(_url);
    return {
      'background-image': `url(${_url})`
    };
  }

}