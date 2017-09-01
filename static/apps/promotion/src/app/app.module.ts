import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ChemicalSolutionModule } from './chemical-solution/chemical-solution.module';
import { FeaturedProjectsModule } from './featured-projects/featured-projects.module';
import { WorkTogetherComponent } from './work-together/work-together.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@NgModule({
    declarations: [
        AppComponent,
        WorkTogetherComponent,
        SocialIconsComponent
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
