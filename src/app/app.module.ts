import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { ChatComponent } from './chat/chat.component';
import { UserListComponent } from './userlist/userlist.component';
import { UserComponent } from './userlist/user/user.component';

import { IdentityService } from './services/identity.service';
import { SocketService } from './services/socket.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { AuthGuardService } from './auth/auth.guard';

import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AppConfig } from './app.config';
import { OAuth2CallbackComponent } from './oauth2callback/oauh2callback.component';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

const appRoutes: Routes = [
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuardService] },
  { path: 'oauth2callback', component: OAuth2CallbackComponent },
  { path: '',
    redirectTo: '/chat',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/chat'}
];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChatComponent,
    UserListComponent,
    UserComponent,
    OAuth2CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
      IdentityService, 
      SocketService, 
      AuthGuardService, 
      UserService,
      AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
