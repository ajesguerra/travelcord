import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { UserService } from './services/user.service.client';
import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client';
import { PlacestestComponent } from './components/placestest/placestest.component';
import {PlaceService} from './services/place.service.client';
import { AgmCoreModule } from '@agm/core';
import {TravelerService} from './services/traveler.service.client';
import {EventService} from './services/event.service.client';
import {EventListComponent} from './components/event/event-list/event-list.component';
import { EventNewComponent } from './components/event/event-new/event-new.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    PlacestestComponent,
    EventListComponent,
    EventNewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArbhF-owYmnIdhp4hXlxG-nCRUxc0HF2c', // 'AIzaSyDm-aq4PesgK2OJNJY-pKbUPkLKiBTPvjE',
      libraries: ['places']
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // Client Side services here
  providers: [TestService,
    UserService,
    TravelerService,
    WebsiteService,
    PageService,
    WidgetService,
    PlaceService,
    EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
