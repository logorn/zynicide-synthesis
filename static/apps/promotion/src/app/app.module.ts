import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChemicalSolutionModule } from './chemical-solution/chemical-solution.module';
import { FeaturedProjectsModule } from './featured-projects/featured-projects.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ChemicalSolutionModule,
        FeaturedProjectsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
