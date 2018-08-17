import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { GitApiComponent } from './git-api/git-api.component';
import { GitApiService } from './git-api.service';
import { TimeEllapsedPipe } from './time-ellapsed.pipe';
// import { StrikethroughDirective } from './strikethrough.directive';
import { UnderlineDirective } from './underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    GitApiComponent,
    TimeEllapsedPipe,
    // StrikethroughDirective,
    UnderlineDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
