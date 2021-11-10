import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieRes } from './model/movie.model';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: MovieRes[] = [];
  private sub: Subscription;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.fetchMovies();
    this.sub = this.homeService._movies$.subscribe(res => {
      this.movies = res;
      console.log(this.movies);
    })
  }

}
