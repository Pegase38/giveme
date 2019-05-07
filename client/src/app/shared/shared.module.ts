import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, ClarityModule],
  exports: [CommonModule, ReactiveFormsModule, ClarityModule],
})
export class SharedModule {}
