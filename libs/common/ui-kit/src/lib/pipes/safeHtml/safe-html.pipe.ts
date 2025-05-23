import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'tsaiSafeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  readonly #sanitizer = inject(DomSanitizer);

  transform(value: string): SafeHtml {
    return this.#sanitizer.bypassSecurityTrustHtml(value.trim());
  }
}
