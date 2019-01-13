import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { FluentModule } from 'src/app/shared/fluent/fluent.module';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';

import { ScrollingService } from './services/scrolling.service';
import { ScenarioService } from './services/scenario.service';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ChatMessageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    FluentModule,
    NgScrollbarModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  entryComponents: [
  ],
  providers: [ScrollingService, ScenarioService]
})
export class HomeModule { }
