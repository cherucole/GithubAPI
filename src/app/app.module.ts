import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'


import { AppComponent } from './app.component';
import { GitApiComponent } from './git-api/git-api.component';
import { GitApiService } from './git-api.service';
import { TimeEllapsedPipe } from './time-ellapsed.pipe';
import { UnderlineDirective } from './underline.directive';
import { RepositoriesComponent } from './repositories/repositories.component';
import {RoutingModule} from './router/router.module';

@NgModule({
  declarations: [
    AppComponent,
    GitApiComponent,
    TimeEllapsedPipe,
    UnderlineDirective,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [GitApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
