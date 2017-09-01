import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './../app.service';
import { SocialLink } from './social-icons';

@Component({
    selector: 'app-social-icons',
    templateUrl: './social-icons.component.html',
    styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {
	@Input() size: string = 'medium';
	socialLinks: SocialLink[];

    constructor(private appService: AppService) { }

    ngOnInit() {
    	this.appService.context.subscribe((context) => {
    		console.log(context);
    		this.socialLinks = context.social_links
    	});
    }

}
