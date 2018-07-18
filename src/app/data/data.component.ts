import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http' ;
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  template: 'The href is: {{href}}',	
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
	req : any;
	public href: string = "";
	data : any;
	ndata : any;
  constructor(private http: Http, private router: Router) { }
  ngOnInit() {
    this.req = this.http.get('assets/json/video.json').subscribe(data => {
      this.data = data.json();
       this.href = this.router.url;
        console.log(this.router.url);
        console.log(data); 
    })
  }
  ngOnDestroy(){
    this.req.unsubscribe();
    this.data.unsubscribe();
  }

}
