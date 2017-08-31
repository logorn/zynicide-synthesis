import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class FeaturedProjectsService {
	projects: BehaviorSubject<any[]> = new BehaviorSubject([{}, {}, {}]);

  	constructor() { }
}
