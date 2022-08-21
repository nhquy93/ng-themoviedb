import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieType, tvType } from 'shared/enums';
import { GoogleApiService } from 'src/app/services/google-api.service';
import { MovieRes } from './model/movie.model';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  movies: MovieRes[] = [];
  hotMovies: MovieRes[] = [];
  topMovies: MovieRes[] = [];
  tvSeries: MovieRes[] = [];
  topTvSeries: MovieRes[] = [];
  private subs: Subscription[];
  movieType = MovieType;
  tvType = tvType;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.fetchMovies(MovieType.popular);
    this.homeService.fetchMovies(MovieType.top_rated);
    this.homeService.fetchTvList(tvType.popular);
    this.homeService.fetchTvList(tvType.top_rated);
    this.subs = [
      this.homeService._movies$.subscribe((res) => {
        this.hotMovies = res.slice(0, 4);
        this.movies = res;
      }),
      this.homeService._topMovies$.subscribe((res) => {
        this.topMovies = res;
      }),
      this.homeService._tvSeries$.subscribe((res) => {
        this.tvSeries = res;
      }),
      this.homeService._topTvSeries$.subscribe((res) => {
        this.topTvSeries = res;
      }),
    ];
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
