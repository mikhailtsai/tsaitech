import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent, SafeHtmlPipe } from '@tsaitech/common/ui-kit';
import { HeaderComponent } from '@tsaitech/layout/header';

import zaebisSvg from './assets/zaebis.svg';

@Component({
  selector: 'tt-home',
  imports: [HeaderComponent, SafeHtmlPipe, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly zaebisSvg = zaebisSvg;
}
