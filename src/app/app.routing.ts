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
import {MainComponent} from './components/user/main/main.component';
import {ActivitysuggestionEditComponent} from './components/activity/activitysuggestion-edit/activitysuggestion-edit.component';
import {EventBrowseComponent} from './components/event/event-browse/event-browse.component';
import {ProfileMarketerComponent} from './components/marketer/profile/profile.component';
import {AdminServiceClient} from './services/admin.service.client';
import {MarketerServiceClient} from './services/marketer.service.client';
import {AllUsersGuardService} from './services/all-users-guard.service';
import {PromotionNewComponent} from "./components/promotion/promotion-new/promotion-new.component";

const APP_ROUTES: Routes = [
  { path : 'places' , component: PlacestestComponent},
  { path : '' , component: LoginComponent},
  { path : 'test', component: TestComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'main' , component: MainComponent},
  { path : 'register' , component: RegisterComponent},
  { path : 'traveler' , component: ProfileComponent, canActivate: [AllUsersGuardService]},
  { path : 'event-list/:tid' , component: EventListComponent, canActivate: [AuthGuard]},
  { path : 'event-list' , component: MainComponent, canActivate: [AuthGuard]},
  { path : 'marketer' , component: ProfileMarketerComponent, canActivate: [MarketerServiceClient]},
  { path : 'browseEvents' , component: EventBrowseComponent},
  { path : 'event/new' , component: EventNewComponent, canActivate: [AuthGuard]},
  { path : 'promotion/new' , component: PromotionNewComponent, canActivate: [MarketerServiceClient]},
  { path : 'event/:eventId/activity' , component: ActivityListComponent},
  { path : 'event/:eventId/activity/new' , component: ActivityNewComponent, canActivate: [AuthGuard]},
  { path : 'event/:eventId/:activityId' , component: ActivitysuggestionListComponent},
  { path : 'event/:eventId/:activityId/newSuggestion' , component: ActivitysuggestionNewComponent, canActivate: [AuthGuard]},
  { path : 'event/:eventId/:activityId/:suggestionId' , component: ActivitysuggestionEditComponent, canActivate: [AuthGuard]},
  { path : 'following' , component: ViewFollowingComponent, canActivate: [AuthGuard]},
  { path : 'allTravelers' , component: ViewTravelersComponent, canActivate: [AuthGuard]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
