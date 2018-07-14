import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http' ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private data: any;
  images : [any];
  imagelist = [
	{src: "assets/images/nature/1.jpg", title: "Image-1", link : "videos/videos-1", video: "video-1" },
	{src: "assets/images/nature/2.jpg", title: "Image-2", link : "videos/videos-2", video: "video-2" },
	{src: "assets/images/nature/3.jpg", title: "Image-3", link : "videos/videos-3", video: "video-3" }, 
	]
  constructor(private http:Http) { }

  ngOnInit() {
    this.data = this.http.get('assets/json/video.json').subscribe(data=>{
      console.log(data.json());
      this.images = data.json();
    })
  }
  
}
