import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInterfaceComponent } from './containers/user-interface/user-interface.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserInterfaceComponent, HeaderComponent, FooterComponent, NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [UserInterfaceComponent]
})
export class UserInterfaceModule { }
