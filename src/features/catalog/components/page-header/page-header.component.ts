import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'shared/enums';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  @Input() category: any;

  constructor() { }

  ngOnInit(): void {
  }

}
