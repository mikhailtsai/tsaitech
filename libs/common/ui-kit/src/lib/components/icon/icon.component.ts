import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeHtmlPipe } from '../../pipes';

@Component({
  selector: 'tsai-icon',
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.fill]':
      'fill() ? fill() === true ? "var(--tsai-color-icons)" : fill() : "none"',
    '[style.stroke]':
      'stroke() ? stroke() === true ? "var(--tsai-color-icons)" : stroke() : "none"',
    '[style.width.px]': 'width()',
    '[style.height.px]': 'height()',
  },
})
export class IconComponent {
  svg = input<string | null>(null);
  fill = input<string | true | false>(false);
  stroke = input<string | true | false>(false);
  size = input<[number, number] | number>(20);

  width = computed<number>(() => {
    const size = this.size();

    return Array.isArray(size) ? size[0] : size;
  });

  height = computed<number>(() => {
    const size = this.size();

    return Array.isArray(size) ? size[1] : size;
  });
}
