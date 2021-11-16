import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { TrailerRes } from "features/detail/model/detail.model";

@Component({
    selector: 'app-video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnChanges {
    @Input() videos: TrailerRes[] = [];

    constructor() { }

    ngOnChanges(simple: SimpleChanges) {

    }

}