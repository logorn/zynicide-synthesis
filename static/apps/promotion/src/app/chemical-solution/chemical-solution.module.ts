import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChemicalSolutionComponent } from './chemical-solution.component';
import { MoleculeComponent } from './molecule/molecule.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	ChemicalSolutionComponent,
    MoleculeComponent
  ],
  exports: [
    ChemicalSolutionComponent
  ]
})
export class ChemicalSolutionModule { }
