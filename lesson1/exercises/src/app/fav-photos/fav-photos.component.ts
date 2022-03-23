import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_46/1799046/doc_mcstuffins_season_5_image.jpg';
  image2 = '';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}