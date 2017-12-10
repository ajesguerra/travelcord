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
import { UserService } from './services/user.service.client';
import { PlacestestComponent } from './components/placestest/placestest.component';
import {PlaceService} from './services/place.service.client';
import { AgmCoreModule } from '@agm/core';
import {TravelerService} from './services/traveler.service.client';
import {EventService} from './services/event.service.client';
import {EventListComponent} from './components/event/event-list/event-list.component';
import { EventNewComponent } from './components/event/event-new/event-new.component';
import { ActivityListComponent } from './components/activity/activity-list/activity-list.component';
import { ActivityNewComponent } from './components/activity/activity-new/activity-new.component';
import { ActivitysuggestionNewComponent } from './components/activity/activitysuggestion-new/activitysuggestion-new.component';
import { ActivitysuggestionListComponent } from './components/activity/activitysuggestion-list/activitysuggestion-list.component';
import {SharedService} from './services/shared.service.client';
import {AuthGuard} from './services/auth-guard.service';
import {ActivitiesService} from './services/activities.service.client';
import {ViewTravelersComponent} from './components/travelers/view-travelers/view-travelers.component';
import { ViewFollowingComponent } from './components/travelers/view-following/view-following.component';
import { MainComponent } from './components/user/main/main.component';
import { SearchTravelersComponent } from './components/travelers/search-travelers/search-travelers.component';
import { EventBrowseComponent } from './components/event/event-browse/event-browse.component';
import { EventDetailsComponent } from './components/event/event-details/event-details.component';
import { ActivityDetailsComponent } from './components/activity/activity-details/activity-details.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    PlacestestComponent,
    EventListComponent,
    EventNewComponent,
    ActivityListComponent,
    ActivityNewComponent,
    ActivitysuggestionNewComponent,
    ActivitysuggestionListComponent,
    ViewTravelersComponent,
    ViewFollowingComponent,
    MainComponent,
    SearchTravelersComponent,
    EventBrowseComponent,
    EventDetailsComponent,
    ActivityDetailsComponent
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
    PlaceService,
    EventService,
    SharedService,
    AuthGuard,
    ActivitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
