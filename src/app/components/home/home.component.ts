import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { NgxPageScrollCoreModule, PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, ExperienceComponent, NgxPageScrollCoreModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: Document
  ) {}




  scrollToTop(target:string) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#'+target, // Alvo do scroll
      duration: 500, // Duração do scroll em milissegundos
      scrollOffset: 0, // Ajuste da posição
      scrollInView: true,
      advancedInlineOffsetCalculation: true
    });

  }


}
