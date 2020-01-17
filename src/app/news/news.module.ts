import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsService } from './news.service';
import { reducers, effects } from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('news', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [NewsService],
  exports: [
    NewsComponent
  ],
})
export class NewsModule { }
