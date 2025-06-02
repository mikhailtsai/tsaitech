import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'tsai-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly appearance = input<'primary' | 'secondary' | 'tertiary'>('primary');
}
