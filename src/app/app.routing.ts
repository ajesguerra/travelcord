import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {TestComponent} from './components/test/test.component';
import {PlacestestComponent} from './components/placestest/placestest.component';
import {EventListComponent} from './components/event/event-list/event-list.component';
import {EventNewComponent} from './components/event/event-new/event-new.component';
import {ActivityListComponent} from './components/activity/activity-list/activity-list.component';
import {AuthGuard} from './services/auth-guard.service';
import {ViewTravelersComponent} from './components/travelers/view-travelers/view-travelers.component';
import {ActivityNewComponent} from './components/activity/activity-new/activity-new.component';
import {ActivitysuggestionListComponent} from './components/activity/activitysuggestion-list/activitysuggestion-list.component';
import {ActivitysuggestionNewComponent} from './components/activity/activitysuggestion-new/activitysuggestion-new.component';
import {ViewFollowingComponent} from './components/travelers/view-following/view-following.component';

const APP_ROUTES: Routes = [
  { path : 'places' , component: PlacestestComponent},
  { path : '' , component: LoginComponent},
  { path : 'test', component: TestComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component: RegisterComponent},
  { path : 'traveler' , component: ProfileComponent, canActivate: [AuthGuard]},
  { path : 'event-list/:tid' , component: EventListComponent, canActivate: [AuthGuard]},
  { path : 'event-list' , component: EventListComponent, canActivate: [AuthGuard]},
  { path : 'event/new' , component: EventNewComponent, canActivate: [AuthGuard]},
  { path : 'event/:eventId/activity' , component: ActivityListComponent, canActivate: [AuthGuard]},
  { path : 'event/:eventId/activity/new' , component: ActivityNewComponent, canActivate: [AuthGuard]},
  { path : 'event/:eventId/:activityId' , component: ActivitysuggestionListComponent, canActivate: [AuthGuard]},
  { path : 'event/:eventId/:activityId/newSuggestion' , component: ActivitysuggestionNewComponent, canActivate: [AuthGuard]},
  { path : 'following' , component: ViewFollowingComponent, canActivate: [AuthGuard]},
  { path : 'allTravelers' , component: ViewTravelersComponent, canActivate: [AuthGuard]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
