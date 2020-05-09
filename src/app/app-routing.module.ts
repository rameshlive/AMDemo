import { CartComponent } from './cart/cart.component';
import { WishlistinfoComponent } from './wishlistinfo/wishlistinfo.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CategoriesComponent } from './categories/categories.component';

 const routes:Routes =[
    {
      path:'',
      redirectTo:'/dashboard',
      pathMatch:'full'
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path:'dashboard',
      component : DashboardComponent,
      //canActivate: [AuthGuard],
      children:[
        {
           path: '',
           component:HomeComponent
        }
       
      ]
    },
    {
      path: 'wishlists',
      component: WishlistinfoComponent
    },
    {
      path: 'categories/:id',
      component: CategoriesComponent
    },
    {
      path : 'cart',
      component : CartComponent
    },
    {
      path:'**',
      redirectTo:'login',
      pathMatch:'full'
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
