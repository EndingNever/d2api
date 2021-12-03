import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../http.service';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  info!:any;
  key:any = [];
  value:any = [];
  
  constructor(private http: HttpClientModule, private service: HttpService) { }

  ngOnInit(): void {
    // this.service.get().subscribe((res)=>{
      // this.info = res
      // const toParse ='www.bungie.net/' + this.info.Response.jsonWorldComponentContentPaths.en.DestinyAchievementDefinition
      // console.log(this.info.Response.jsonWorldComponentContentPaths.en.DestinyAchievementDefinition)
      // console.log(toParse)
      // console.log(JSON.stringify(toParse))
    // })
    // this.service.json().pipe(map(data=>{})).subscribe(result=>{this.info = result; console.log(this.info)})
    this.service.json().subscribe((res:any)=>{
      this.info = res;
      console.log(res); //? res is the info we are receiving from the API.
      for (let key in res){
      this.key.push(key)
      //  console.log("key: " + this.key);
      this.value = this.info[key].blacklisted
      
      //  console.log(this.key)
      //  console.log(this.key.this.value)
      }
      })
  }


}
