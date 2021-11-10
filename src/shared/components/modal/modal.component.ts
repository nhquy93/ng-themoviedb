import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges {
    @Input() active: string = '';
    @Input() videoSrc: string = 'https://www.youtube.com/embed';
    @Output() close$ = new EventEmitter<any>();

    ngOnChanges(simple: SimpleChanges){ 
    }

    close() {
        this.close$.emit();
    }
}