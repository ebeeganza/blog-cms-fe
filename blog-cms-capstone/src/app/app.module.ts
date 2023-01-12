import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponent } from './message/message.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatDateRangeInput } from '@angular/material/datepicker';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { BloggerComponent } from './blogger/blogger.component';
// import {FormGroup, FormControl} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    CommentComponent,
    LoginComponent,
    HeaderComponent,
    BlogComponent,
    BloggerComponent,
    BlogListComponent,
  

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSidenavModule,
    MatBadgeModule,
    HttpClientModule
    

    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
