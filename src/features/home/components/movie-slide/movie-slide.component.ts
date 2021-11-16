import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'shared/enums';
import { environment } from 'src/environments/environment';
import Swiper, { Autoplay, SwiperOptions } from 'swiper';
import { MovieRes } from '../../model/movie.model';
import { HomeService } from '../../services/home.service';

Swiper.use([Autoplay]);

@Component({
  selector: 'app-movie-slide',
  templateUrl: './movie-slide.component.html',
  styleUrls: ['./movie-slide.component.scss']
})
export class MovieSlideComponent implements OnInit, OnChanges, OnDestroy {
  @Input() movies: MovieRes[] = [];
  private sub: Subscription;
  env = environment.apiConfig;
  config: SwiperOptions = {
    modules: [Autoplay],
    autoplay: {
      delay: 5000
    },
    speed: 1000,
    // effect: 'fade',
    // coverflowEffect: {
    //   slideShadows: true,
    //   rotate: 15,
    //   stretch: 15,
    //   depth: 5,
    //   modifier: 5
    // },
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true
  }
  isActive = '';
  videoSrc = '';

  constructor(
    private homeService: HomeService
  ) { }

  ngOnChanges(simple: SimpleChanges) {
  }

  ngOnInit(): void {
    this.sub = this.homeService._trailer$.subscribe(trailer => {
      this.videoSrc = `https://www.youtube.com/embed/${trailer.key}`;
      this.isActive = 'active';
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  bgImg(image: any) {
    const background = image ? this.env.originalImage(image) : 'assets/image-not-found.png';
    return {
      'background-image': `url(${background})`
    };
  }

  showModal(id: number) {
    this.homeService.getTrailers(Category.movie, id);
  }

  hideModal() {
    this.isActive = '';
  }
}
