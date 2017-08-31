import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedProjectsComponent } from './featured-projects.component';
import { FeaturedProjectsService } from './featured-projects.service';

@NgModule({
  	imports: [
    	CommonModule,
  	],
  	declarations: [
  		FeaturedProjectsComponent
  	],
  	providers: [
  		FeaturedProjectsService
  	],
  	exports: [
  		FeaturedProjectsComponent
  	]
})
export class FeaturedProjectsModule { }
