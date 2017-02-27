import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports commented out for brevity
import { RouterModule } from '@angular/router';

import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header/header.component';


// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
