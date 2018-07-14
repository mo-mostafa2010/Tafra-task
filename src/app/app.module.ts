import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideodetailsComponent } from './videodetails/videodetails.component';
import { RouterModule, Routes } from '@angular/router';
import { SafePipe } from './safe.pipe';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
const appRoutes : Routes = [
    {
        path:":embed",
        component:DataComponent,
    },   
    {
        path:"",
        component:HomeComponent,
        
    },
    {
        path:"videos",
        component:VideolistComponent,
        
    },
    {
        path:"videos/:slug",
        component:VideodetailsComponent,
        
    },
]
@NgModule({
  declarations: [
    AppComponent,
    VideolistComponent,
    VideodetailsComponent,
    SafePipe,
    HomeComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
        appRoutes),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
}

