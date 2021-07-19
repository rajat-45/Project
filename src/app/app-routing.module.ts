import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { SendComponent } from './send/send.component';
import { TokenComponent } from './token/token.component';

const routes: Routes = [ 
  {path:'login',component:LoginComponent},
  {path:'token',component:TokenComponent},
  {path:'home',component:QRCodeComponent},
  {path:'main',component:MainpageComponent,canActivate:[AuthGuard]},
  {path:'send',component:SendComponent},

  {path:'',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
