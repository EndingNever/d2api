import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'destiny2';

  headers(){
    const headers = new Headers
    headers.set('X-API-KEY', '2e578ee5dad14ca79440bd11d79c6ba7')
  }
  ngOnInit(): void {
    
  }
}