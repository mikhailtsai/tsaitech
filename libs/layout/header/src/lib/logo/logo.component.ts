import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'tt-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class LogoComponent {}
