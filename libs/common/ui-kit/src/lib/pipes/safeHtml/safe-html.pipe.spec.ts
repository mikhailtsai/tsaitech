import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SafeHtmlPipe],
    });

    sanitizer = TestBed.inject(DomSanitizer);
    pipe = TestBed.inject(SafeHtmlPipe);
  });

  it('should call bypassSecurityTrustHtml with the given value', () => {
    // arrange
    const html = '<b>safe</b> ';
    const spy = jest.spyOn(sanitizer, 'bypassSecurityTrustHtml');

    // act
    const result = pipe.transform(html);

    // assert
    expect(spy).toHaveBeenCalledWith(html.trim());
    expect(result).toEqual({
      changingThisBreaksApplicationSecurity: html.trim(),
    });
  });
});
