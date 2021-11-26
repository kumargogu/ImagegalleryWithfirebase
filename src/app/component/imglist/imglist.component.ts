import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'imglist',
  templateUrl: './imglist.component.html',
  styleUrls: ['./imglist.component.css']
})
export class ImglistComponent implements OnInit {
  imgList: any[] | undefined;
  rowIndexArray: any[] | undefined;
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imgList = list.map(item => { return item.payload.val(); });
        this.rowIndexArray = Array.from(Array(Math.ceil(this.imgList.length / 3)).keys());
      }
    );
  }

}
