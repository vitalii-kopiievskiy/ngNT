import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { SliderComponent } from "./slider/slider.component";
import { FirstWidgetComponent } from "./first-widget/first-widget.component";
import { SecondWidgetComponent } from "./second-widget/second-widget.component";
import { SetComponent } from "./set/set.component";
import { GetComponent } from "./get/get.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SliderComponent,
    FirstWidgetComponent,
    SecondWidgetComponent,
    SetComponent,
    GetComponent,
    FooterComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
