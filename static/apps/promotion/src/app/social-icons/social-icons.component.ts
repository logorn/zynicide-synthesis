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
	// A higher requiredImportance will display more social icons
	@Input() requiredImportance: number = 1;
	socialLinks: SocialLink[];

    constructor(private appService: AppService) { }

    ngOnInit() {
    	this.appService.context.subscribe((context) => {
    		this.socialLinks = context.social_links.filter((socialLink) => {
    			return socialLink.importance <= this.requiredImportance;
    		})
    	});
    }

}
