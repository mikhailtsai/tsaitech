import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { IconComponent } from '@tsaitech/common/ui-kit';

import { LogoComponent } from '../logo';
import telegramSvg from './assets/telegram.svg';
import linkedInSvg from './assets/linkedin.svg';

@Component({
  selector: 'tt-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent, IconComponent, RouterLink, RouterLinkActive],
})
export class HeaderComponent {
  readonly assets = {
    telegramSvg,
    linkedInSvg,
  };

  withLogo = input<boolean>(true);
}
