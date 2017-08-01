import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalSolutionComponent } from './chemical-solution.component';

describe('ChemicalSolutionComponent', () => {
  let component: ChemicalSolutionComponent;
  let fixture: ComponentFixture<ChemicalSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the chemical solution component', () => {
    expect(component).toBeTruthy();
  });
});
