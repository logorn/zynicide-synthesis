import { TestBed, inject } from '@angular/core/testing';

import { FeaturedProjectsService } from './featured-projects.service';

describe('FeaturedProjectsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FeaturedProjectsService]
        });
    });

    it('should be created', inject([FeaturedProjectsService], (service: FeaturedProjectsService) => {
        expect(service).toBeTruthy();
    }));
});
