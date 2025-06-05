import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeHtmlPipe } from '@tsaitech/common/ui-kit';

import zaebisSvg from './assets/zaebis.svg';

@Component({
  selector: 'tt-background-zaebis',
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './background-zaebis.component.html',
  styleUrl: './background-zaebis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundZaebisComponent {
  readonly zaebisSvg = zaebisSvg;
}
