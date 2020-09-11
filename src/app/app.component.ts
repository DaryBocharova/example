import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  color: boolean = true;
  ngOnInit() {
    setTimeout(()=> {this.color= !this.color}, 15000);
  }
}
