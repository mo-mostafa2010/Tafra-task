import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import { Http } from '@angular/http' ;
import { HttpModule } from '@angular/http';
@Component({
  selector: 'videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit, OnDestroy {
    title = "anyshit";
    today;
    data: any;
    req : any;
    videolist : [any]
  constructor(private san: DomSanitizer, private http: Http) { }
  ngOnInit() {
    this.today = new Date();
    this.req = this.http.get('assets/json/video.json').subscribe(data => {
      console.log(data.json());
      this.data = data.json
    })
  }
  ngOnDestroy(){
    this.req.unsubscribe();
    this.data.unsubscribe();
  }
  getEmbedURL(item){
    return this.san.bypassSecurityTrustResourceUrl('https:www.youtube.com/embed/' + item.embed );
  }
}
