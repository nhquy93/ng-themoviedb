import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieRes } from 'features/home/model/movie.model';
import { Subscription } from 'rxjs';
import { Category, MovieType, tvType } from 'shared/enums';
import { CatalogService } from './services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
  category: any;
  data: MovieRes[] = [];
  currentPage: number;
  totalPages: number;
  keyword: any;
  private subs: Subscription[];

  constructor(
    private _route: ActivatedRoute,
    private catService: CatalogService
  ) {
    this._route.params.subscribe(param => {
      this.category = param;
      this.keyword = undefined;
      this.data = [];
      switch (this.category['cateType']) {
        case Category.movie:
          this.catService.fetchMovies(MovieType.upcoming, {});
          break;
        default:
          this.catService.fetchTvList(tvType.popular, {});
      };
    });
  }

  ngOnInit(): void {
    this.subs = [
      this.catService._movies$.subscribe(movies => {
        this.data = [...this.data, ...movies];
      }),
      this.catService._tvSeries$.subscribe(tvSeries => {
        this.data = [...this.data, ...tvSeries];
      }),
      this.catService._currentPage$.subscribe(page => {
        this.currentPage = page;
      }),
      this.catService._totalPages$.subscribe(totalPages => {
        this.totalPages = totalPages;
      })
    ];
  }

  loadMore(event: any) {
    if(!this.keyword) {
      switch (this.category['cateType']) {
        case Category.movie:
          this.catService.fetchMovies(MovieType.upcoming, { page: event });
          break;
        default:
          this.catService.fetchTvList(tvType.popular, { page: event });
      };
    } else {
      this.catService.filterMoviesByQueryParams(this.category['cateType'], {page: event, query: this.keyword});
    }
  }

  searchQuery(event: any) {
    this.keyword = event;
    if (!event) {
      switch (this.category['cateType']) {
        case Category.movie:
          this.catService.fetchMovies(MovieType.upcoming, {});
          break;
        default:
          this.catService.fetchTvList(tvType.popular, {});
      };
    } else {
      this.data = [];
      this.catService.filterMoviesByQueryParams(this.category['cateType'], {page: 1, query: event});
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
