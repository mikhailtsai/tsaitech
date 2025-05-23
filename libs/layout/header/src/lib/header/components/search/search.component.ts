import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tt-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {}
