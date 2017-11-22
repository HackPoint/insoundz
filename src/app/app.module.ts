import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './video/player/player.component';
import { ManagerComponent } from './video/manager/manager.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
