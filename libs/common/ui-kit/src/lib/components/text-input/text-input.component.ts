import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  input,
  model,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'tsai-text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class TextInputComponent {
  value = model<string>('');
  isNumeric = input<boolean>(false);
  placeholder = input<string>('');
  iconRef = input<TemplateRef<unknown> | null>(null);

  @ViewChild('inputRef', { static: true })
  inputRef!: ElementRef<HTMLInputElement>;

  @HostListener('click')
  onClick() {
    this.inputRef.nativeElement.focus();
  }
}
