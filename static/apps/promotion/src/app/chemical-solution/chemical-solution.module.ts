import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChemicalSolutionComponent } from './chemical-solution.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	ChemicalSolutionComponent
  ],
  exports: [
    ChemicalSolutionComponent
  ]
})
export class ChemicalSolutionModule { }
