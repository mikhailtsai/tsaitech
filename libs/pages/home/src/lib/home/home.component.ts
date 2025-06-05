import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeaderComponent } from '@tsaitech/layout/header';

import {
  BackgroundZaebisComponent,
  HeroComponent,
  WhatWeDoComponent,
} from './components';

@Component({
  selector: 'tt-home',
  imports: [
    HeaderComponent,
    HeroComponent,
    BackgroundZaebisComponent,
    WhatWeDoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
