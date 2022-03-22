import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.scss']
})
export class HowitworksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickN($element){
    let x = document.querySelector("#"+$element);
    if (x){
        x.scrollIntoView();
    }
}

}
