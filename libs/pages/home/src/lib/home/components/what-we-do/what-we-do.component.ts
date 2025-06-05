import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeHtmlPipe } from '@tsaitech/common/ui-kit';

import panel1Image from './assets/panel-1-image.svg';
import panel2Image from './assets/panel-2-image.svg';
import panel3Image from './assets/panel-3-image.svg';

@Component({
  selector: 'tt-what-we-do',
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatWeDoComponent {
  readonly panel1Image = panel1Image;
  readonly panel2Image = panel2Image;
  readonly panel3Image = panel3Image;
}
