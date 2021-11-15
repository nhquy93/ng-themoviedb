import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    @Output() _textSearch$ = new EventEmitter<any>();
    @ViewChild('search', { static: true }) search: ElementRef;
    txtSearch: any;

    constructor() { }

    ngOnInit(): void {
        fromEvent(this.search.nativeElement, 'keyup')
        .pipe(
            debounceTime(250),
            distinctUntilChanged()
        )
        .subscribe(() => {
            this.txtSearch = this.search.nativeElement.value;
        });
    }

    onSearch() {
        this._textSearch$.emit(this.txtSearch);
    }
}