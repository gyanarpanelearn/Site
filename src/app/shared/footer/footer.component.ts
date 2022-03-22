import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // loadAPI: Promise<any>;

  test: Date = new Date();
  name: string;
  href: any;
  titlee: string;
  constructor(private router: Router, private route: ActivatedRoute, public location: Location) {
    // this.loadAPI = new Promise((resolve) => {
    //   this.loadScript();
    //   resolve(true);
    // });
  }

  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = ["https://code.jivosite.com/widget/YVfnLITPxr"];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }
  }

  onClickN($element) {
    let x = document.querySelector("#" + $element);
    if (x) {
      x.scrollIntoView();
    }
  }

  ngOnInit() {
    // this.href = this.route.url;
    // console.log(this.route.url);
    // alert(this.href);
    // alert(this.router.url);
  }
  getPath() {
    // return this.router.url;
    this.titlee = this.location.prepareExternalUrl(this.location.path());
    alert(this.titlee);
  }
}
