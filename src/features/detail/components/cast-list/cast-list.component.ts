import { Component, Input } from "@angular/core";
import { CastRes } from "features/detail/model/detail.model";
import { environment } from "src/environments/environment";

@Component({
    selector: 'app-cast-list',
    templateUrl: './cast-list.component.html',
    styleUrls: ['./cast-list.component.scss']
})
export class CastListComponent {
    @Input() casts: CastRes[] = [];
    env = environment.apiConfig;
    constructor(
    ) { }

    bgImg(image: any) {
        let _url = image ? this.env.w500Image(image) : 'assets/profile-not-found.jpg';
        return {
            'background-image': `url(${_url})`,
            'background-position': 'center'
        };
    }
}