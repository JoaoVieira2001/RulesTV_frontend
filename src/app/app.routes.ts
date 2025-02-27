import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EnterPinComponent } from './enter-pin/enter-pin.component';
import { FaqComponent } from './faq/faq.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordCreatePasswordComponent } from './forgot-password-create-password/forgot-password-create-password.component';
import { ForgotPasswordVerifyComponent } from './forgot-password-verify/forgot-password-verify.component';
import { ForgotPinComponent } from './forgot-pin/forgot-pin.component';
import { ForgotPinReplaceComponent } from './forgot-pin-replace/forgot-pin-replace.component';
import { SelectAvatarComponent } from './select-avatar/select-avatar.component';
import { SelectProfileComponent } from './select-profile/select-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'edit_profile', component: EditProfileComponent },
  { path: 'enter_pin', component: EnterPinComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'forgot_password', component: ForgotPasswordComponent },
  { path: 'forgot_password_replace', component: ForgotPasswordCreatePasswordComponent },
  { path: 'forgot_password_verify', component: ForgotPasswordVerifyComponent },
  { path: 'forgot_pin', component: ForgotPinComponent },
  { path: 'forgot_pin_replace', component: ForgotPinReplaceComponent },
  { path: 'select_avatar', component: SelectAvatarComponent },
  { path: 'select_profile', component: SelectProfileComponent },
  { path: 'sign_up', component: SignUpComponent },
  { path: 'sign_in', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Correct usage of forRoot
  exports: [RouterModule]
})
export class AppRoutingModule {}
