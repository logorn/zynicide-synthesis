import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedProjectsComponent } from './featured-projects.component';
import { FeaturedProjectsService } from './featured-projects.service';
import { ProjectComponent } from './project/project.component';

@NgModule({
  	imports: [
    	CommonModule,
  	],
  	declarations: [
  		FeaturedProjectsComponent,
  		ProjectComponent,
  	],
  	providers: [
  		FeaturedProjectsService
  	],
  	exports: [
  		FeaturedProjectsComponent
  	]
})
export class FeaturedProjectsModule { }
