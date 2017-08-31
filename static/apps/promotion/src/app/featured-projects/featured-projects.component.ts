import { Component, OnInit } from '@angular/core';

import { FeaturedProjectsService } from './featured-projects.service';

@Component({
    selector: 'app-featured-projects',
    templateUrl: './featured-projects.component.html',
    styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {
	projects: any[];

  	constructor(private projectService: FeaturedProjectsService) { }

  	ngOnInit() {
  		this.projectService.projects.subscribe((projects) => this.projects = projects);
  	}

}
