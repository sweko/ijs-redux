import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralContainerComponent } from './general-container';
import { DisplayContainerComponent } from './display-container';
import { ButtonContainerComponent } from './button-container';
import { AddButtonComponent } from './add-button';
import { SubtractButtonComponent } from './subtract-button';
import { ShowNumberComponent } from './show-number';
import { NavigationBarComponent } from './navigation-bar';
import { MainContentComponent } from './main-content';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GeneralContainerComponent,
    DisplayContainerComponent,
    ButtonContainerComponent,
    AddButtonComponent,
    SubtractButtonComponent,
    ShowNumberComponent,
    NavigationBarComponent,
    MainContentComponent
  ],
  exports: [
    GeneralContainerComponent,
    DisplayContainerComponent,
    ButtonContainerComponent,
    AddButtonComponent,
    SubtractButtonComponent,
    ShowNumberComponent,
    NavigationBarComponent,
    MainContentComponent
  ]
})
export class ComponentsModule { }
