import { Component, OnInit, ElementRef } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(private el: ElementRef) { }

    ngOnInit() {
		let typed = new Typed(this.el.nativeElement.querySelector("#what-i-am"), {
		    strings: [
		    	"Web Developer",
		    	"Data Scientist",
		    	"Amature Designer",
		    	"World Traveler",
		    	"Avid Hiker",
		    	"Landscape Photographer"
		    ],
		    typeSpeed: 60,
		    backSpeed: 60,
		    backDelay: 1500,
		    loop: true
		});
    }
}
