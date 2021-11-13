import { Component, Input } from "@angular/core";

@Component({
    selector: 'custom-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class CustomButtonComponent {
    @Input() btnClass: string;
    @Input() injectElement: string;
}