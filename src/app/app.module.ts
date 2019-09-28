import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DiagnosisComponent} from './diagnosis/diagnosis.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ChartModule} from 'primeng/chart';
import { TimelineComponent } from './timeline/timeline.component';
import {TimelineItemComponent} from './timeline/timeline-item/timeline-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagnosisComponent,
    TimelineComponent,
    TimelineItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
