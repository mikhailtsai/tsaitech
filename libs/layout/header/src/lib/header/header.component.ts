import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { IconComponent } from '@tsaitech/common/ui-kit';

import { LogoComponent } from '../logo';
import { SearchComponent } from './components';
import telegramSvg from './assets/telegram.svg';
import linkedInSvg from './assets/linkedin.svg';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'tt-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SearchComponent,
    LogoComponent,
    IconComponent,
    RouterLink,
    RouterLinkActive,
  ],
})
export class HeaderComponent {
  readonly assets = {
    telegramSvg,
    linkedInSvg,
  };

  withLogo = input<boolean>(true);
}
