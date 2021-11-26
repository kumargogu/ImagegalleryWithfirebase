import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
//import { finalize } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ImageService } from '../image.service';
//import { url } from 'inspector';


@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  imgSrc: string = "../assets/img/image-icon.png";
  selectedImg: any = null;
  isSubmited: boolean | undefined;
  formImg = new FormGroup({
    caption: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    imgUrl: new FormControl('', Validators.required)
  })
  get caption() {
    return this.formImg.get('caption');
  }
  get category() {
    return this.formImg.get('category');
  }
  get imgUrl() {
    return this.formImg.get('imgUrl');
  }

  constructor(private fireStorage: AngularFireStorage, private imageService: ImageService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImg = event.target.files[0];

    }
    else {
      this.imgSrc = '../assets/img/image-icon.png';
      this.selectedImg = null;
    }
  }
  onSubmit(formValue: any) {
    this.isSubmited = true;
    if (this.formImg.valid) {
      var filePath = `${formValue.category}/${this.selectedImg.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.fireStorage.ref(filePath);
      this.fireStorage.upload(filePath, this.selectedImg).snapshotChanges().pipe(finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          formValue['imgUrl'] = url;
          this.imageService.insertImageDetails(formValue);
          this.resetForm()
        })
      })).subscribe();
    }
  }
  resetForm() {
    this.formImg.reset();
    this.formImg.setValue({
      caption: "",
      imgUrl: '',
      category: 'Flowers'
    });
    this.imgSrc = "../assets/img/image-icon.png";
    this.selectedImg = null;
    this.isSubmited = false;
  }
  /*  get formControls() {
   return this.formImg['controls'];
 }*/
}
