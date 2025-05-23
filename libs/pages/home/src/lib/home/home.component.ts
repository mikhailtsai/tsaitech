import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@tsaitech/layout/header';

@Component({
  selector: 'tt-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
