import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconComponent, TextInputComponent } from '@tsaitech/common/ui-kit';

import searchSvg from './assets/search.svg';

@Component({
  selector: 'tt-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TextInputComponent, IconComponent],
})
export class SearchComponent {
  readonly iconSvg = searchSvg;
}
