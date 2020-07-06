import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { BrMaskerModule } from 'br-mask';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    BrMaskerModule,
    RouterModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
