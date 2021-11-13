import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MovieRes } from 'features/home/model/movie.model';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit, OnChanges {
  @Input() data: MovieRes[] = [];
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Output() _loadMore$ = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(simple: SimpleChanges) {
  }

  ngOnInit(): void {
  }

  loadMore() {
    this._loadMore$.emit(this.currentPage + 1);
  }

}
