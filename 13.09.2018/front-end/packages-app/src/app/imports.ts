//models
export { User } from './shared/models/user.model'
//shared
//services
export { AuthenticationService } from './shared/services/authentication.service'
//validators
export { createValidatorArr } from './shared/validators/validators';
export {ValidateId} from './shared/validators/id-validator';
export { Global } from './shared/global'

//compomnents
export { AppComponent } from './app.component';
export { AccountComponent } from './components/account/account.component';
export { AccountMenuComponent } from './components/account-menu/account-menu.component';
export { LoginComponent } from './components/login/login.component';
export { RegisterComponent } from './components/register/register.component';

export { routing } from './app.routing';