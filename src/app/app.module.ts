import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { TitleComponent } from './components/title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
