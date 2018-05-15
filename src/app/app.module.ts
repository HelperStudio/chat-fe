import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, APP_INITIALIZER  } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { ChatComponent } from './chat/chat.component';
import { HelloComponent } from './hello/hello.component';

import { IdentityService } from './services/identity.service';
import { SocketService } from './services/socket.service';

import { AuthGuardService } from './auth/auth.guard';

import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AppConfig } from './app.config';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

const appRoutes: Routes = [
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuardService]  },
  { path: 'hello', component: HelloComponent },
  { path: '',
    redirectTo: '/hello',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/hello'}
];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChatComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    AppConfig,
    { provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true },
      IdentityService, SocketService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
