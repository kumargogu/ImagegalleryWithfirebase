import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './component/image/image.component';
import { ImagesComponent } from './component/images/images.component';
import { ImglistComponent } from './component/imglist/imglist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'images/upload', pathMatch: 'full'
  },
  {
    path: 'images',
    component: ImagesComponent, children: [
      {
        path: 'upload',
        component: ImageComponent     //images/upload
      },
      {
        path: 'imglist',
        component: ImglistComponent  //images/imglist
      }
    ]
  },
  {
    path: 'imglist',
    component: ImglistComponent
  }
  /*   {
    path: '',
    component: ImagesComponent
  }, 
  {
    path: 'images',
    component: ImagesComponent
  },
  {
    path: 'upload',
    component: ImageComponent
  },
  {
    path: 'imglist',
    component: ImglistComponent
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
