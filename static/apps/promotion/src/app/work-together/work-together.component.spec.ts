import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTogetherComponent } from './work-together.component';

describe('WorkTogetherComponent', () => {
    let component: WorkTogetherComponent;
    let fixture: ComponentFixture<WorkTogetherComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WorkTogetherComponent ]
        })
        .compileComponents();
    }));

  beforeEach(() => {
        fixture = TestBed.createComponent(WorkTogetherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
