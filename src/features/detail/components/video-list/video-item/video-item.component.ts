import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import { TrailerRes } from "features/detail/model/detail.model";

@Component({
    selector: 'video-item',
    templateUrl: './video-item.component.html',
    styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnChanges, AfterViewInit {
    @Input() video: TrailerRes;
    @ViewChild('iframeRef', { static: true }) ref: ElementRef;

    constructor() { }

    ngOnChanges(simple: SimpleChanges) {
    }

    ngAfterViewInit(): void {
        const height = this.ref.nativeElement.offsetWidth * 9 / 16 + 'px';
        this.ref.nativeElement.setAttribute('height', height);
    }
}