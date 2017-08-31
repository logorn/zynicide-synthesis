import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ChemicalSolutionModule } from './chemical-solution/chemical-solution.module';
import { FeaturedProjectsModule } from './featured-projects/featured-projects.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ChemicalSolutionModule,
        FeaturedProjectsModule,
    ],
    providers: [
        AppService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
