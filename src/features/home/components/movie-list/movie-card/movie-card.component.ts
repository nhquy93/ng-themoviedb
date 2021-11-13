import { Component, Input, OnInit } from '@angular/core';
import { MovieRes } from 'features/home/model/movie.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie = new MovieRes();
  btnIcon = `<i class="fa-solid fa-play"></i>`;
  env = environment.apiConfig;

  constructor() { }

  ngOnInit(): void {
  }

  bgImg(url: any) {
    return {
      'background-image': `url(${url})`
    };
  }

}
