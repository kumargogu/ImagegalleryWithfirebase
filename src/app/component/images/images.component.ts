import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImageDetailList();
  }

}
