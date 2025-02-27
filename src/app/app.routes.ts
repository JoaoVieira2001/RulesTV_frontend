import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { WatchlistComponent } from './routes/watchlist/watchlist.component';
import { SeriesComponent } from './routes/series/series.component';
import { MoviesComponent } from './routes/movies/movies.component';
import { EditProfileComponent } from './routes/edit-profile/edit-profile.component';
import { EnterPinComponent } from './routes/enter-pin/enter-pin.component';
import { FaqComponent } from './routes/faq/faq.component';
import { ForgotPasswordComponent } from './routes/forgot-password/forgot-password.component';
import { ForgotPasswordCreatePasswordComponent } from './routes/forgot-password-create-password/forgot-password-create-password.component';
import { ForgotPasswordVerifyComponent } from './routes/forgot-password-verify/forgot-password-verify.component';
import { ForgotPinComponent } from './routes/forgot-pin/forgot-pin.component';
import { ForgotPinReplaceComponent } from './routes/forgot-pin-replace/forgot-pin-replace.component';
import { SelectAvatarComponent } from './routes/select-avatar/select-avatar.component';
import { SelectProfileComponent } from './routes/select-profile/select-profile.component';
import { SignUpComponent } from './routes/sign-up/sign-up.component';
import { SignInComponent } from './routes/sign-in/sign-in.component';
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
