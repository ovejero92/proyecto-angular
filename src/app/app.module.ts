import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from "./app.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { StudentsPageComponent } from "./students-page/students-page.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import {FooterComponent} from './footer/footer.component'

@NgModule({
    declarations:[ AppComponent,SidenavComponent,StudentsPageComponent,ToolbarComponent, FooterComponent],
    imports: [ BrowserModule,HttpClientModule, AppRoutingModule ],
    providers: [],
    bootstrap:[AppComponent],
})
export class AppModule {}