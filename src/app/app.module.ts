import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './component/image/image.component';
import { ImglistComponent } from './component/imglist/imglist.component';
import { ImagesComponent } from './component/images/images.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ImageService } from './component/image.service';
//import { AngularFireStorage } from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ImglistComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    //AngularFireStorage,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' })
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
